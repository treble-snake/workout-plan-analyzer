import {selector, selectorFamily} from 'recoil';
import {
  workoutDayExercisesSelector,
  workoutPlanDaysSelector
} from './WorkoutPlanState';
import {
  calculateWorkingSetsV3, calcWeeklyFrequency, emptyRangeMap,
  sumAllRanges
} from '../../analytics/utils/WorkingSets';
import {emptyRange, sumRanges} from '../../exercises/RangeUtils';
import {MuscleGroup} from '../../analytics/systems-data/MuscleGroupsValues';
import {MovementType} from '../../analytics/systems-data/MovementTypeValues';
import {QtyRange} from '../../../../types/workout';
import {countBy, identity, mapObjIndexed, mergeRight} from 'ramda';
import {
  gradeByMovementType
} from '../../analytics/utils/grades/gradeByMovementType';
import {lifterExperienceState} from '../ViewerConfigState';
import {
  gradeByMuscleGroup
} from '../../analytics/utils/grades/gradeByMuscleGroup';

export const workoutDayStatsSelector = selectorFamily({
  key: 'workoutDaysStatsSelector',
  get: (dayId: string) => ({get}) => {
    const exercises = get(workoutDayExercisesSelector(dayId));
    return calculateWorkingSetsV3(exercises);
  }
});

export const workoutTotalStatsSelector = selector({
  key: 'workoutTotalStatsSelector',
  get: ({get}) => {
    console.time('workout_Total_StatsSelector');
    const days = get(workoutPlanDaysSelector);
    const experience = get(lifterExperienceState);

    const ids = days
      .filter((day) => ('exercises' in day && day.exercises.length > 0))
      .map((day) => day.id);
    const emptyMuscleSets = emptyRangeMap(MuscleGroup);
    const emptyMovementSets = emptyRangeMap(MovementType);

    const total = ids.reduce((acc, id) => {
      const dayStats = get(workoutDayStatsSelector(id));
      return {
        totalSets: sumRanges(acc.totalSets, dayStats.totalSets),
        setsByMuscle: sumAllRanges(acc.setsByMuscle, dayStats.setsByMuscleGroup),
        setsByMovement: sumAllRanges(acc.setsByMovement, dayStats.setsByMovementType),
        musclesUsed: acc.musclesUsed.concat(dayStats.musclesUsed),
        movementsUsed: acc.movementsUsed.concat(dayStats.movementsUsed)
      };
    }, {
      totalSets: emptyRange() as QtyRange,
      setsByMuscle: emptyMuscleSets,
      setsByMovement: emptyMovementSets,
      musclesUsed: [] as MuscleGroup[],
      movementsUsed: [] as MovementType[]
    });

    const musclesFrequency = mergeRight(
      emptyMuscleSets,
      calcWeeklyFrequency(days.length, countBy(identity, total.musclesUsed))
    );
    const movementsFrequency = mergeRight(
      emptyMovementSets,
      calcWeeklyFrequency(days.length, countBy(identity, total.movementsUsed))
    );

    const gradedSetsByMovement = mapObjIndexed((sets, movement) => ({
      sets,
      grade: gradeByMovementType({
        movement: movement as MovementType,
        sets,
        freq: movementsFrequency[movement],
        level: experience
      })
    }), total.setsByMovement);

    const gradedSetsByMuscle = mapObjIndexed((sets, muscle) => ({
      sets,
      grade: gradeByMuscleGroup({
        muscle: muscle as MuscleGroup,
        sets,
        freq: musclesFrequency[muscle],
        level: experience
      })
    }), total.setsByMuscle);

    const result = {
      totalSets: total.totalSets,
      setsByMuscle: gradedSetsByMuscle,
      setsByMovement: gradedSetsByMovement,
      musclesFrequency,
      movementsFrequency
    };

    console.timeEnd('workout_Total_StatsSelector');
    return result;
  }
});
