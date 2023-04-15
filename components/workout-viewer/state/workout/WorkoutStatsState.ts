import {selector, selectorFamily} from 'recoil';
import {
  workoutDayExercisesSelector,
  workoutPlanDaysSelector
} from './WorkoutPlanState';
import {
  analyzeDayWorkingSets,
  calcWeeklyFrequency,
  emptyRangeMap,
  sumAllRanges
} from '../../analytics/utils/AnalyticUtils';
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
import {System} from '../../analytics/systems-data/SystemsCommon';

export const workoutDayStatsSelector = selectorFamily({
  key: 'workoutDaysStatsSelector',
  get: (dayId: string) => ({get}) => {
    const exercises = get(workoutDayExercisesSelector(dayId));
    const experience = get(lifterExperienceState);
    return analyzeDayWorkingSets(exercises, experience);
  }
});

export const workoutDayHasWarningsSelector = selectorFamily({
  key: 'workoutDaysStatsSelector',
  get: (dayId: string) => ({get}) => {
    const stats = get(workoutDayStatsSelector(dayId));
    for (const system of Object.values(System)) {
      for (const hasWarning of Object.values(stats.warningsBy[system])) {
        if (hasWarning) {
          return true;
        }
      }
    }
    return false;
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
        setsByMuscle: sumAllRanges(acc.setsByMuscle, dayStats.setsBy[System.Muscle]),
        setsByMovement: sumAllRanges(acc.setsByMovement, dayStats.setsBy[System.Movement]),
        musclesUsed: acc.musclesUsed.concat(dayStats.usedBy[System.Muscle]),
        movementsUsed: acc.movementsUsed.concat(dayStats.usedBy[System.Movement])
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
      setsBy: {
        [System.Muscle]: gradedSetsByMuscle,
        [System.Movement]: gradedSetsByMovement,
      },
      frequencyBy: {
        [System.Muscle]: musclesFrequency as Record<string, QtyRange>,
        [System.Movement]: movementsFrequency as Record<string, QtyRange>,
      }
    };

    console.timeEnd('workout_Total_StatsSelector');
    return result;
  }
});
