import {mapObjIndexed} from 'ramda';
import {WorkoutPlan} from '../../../../types/workout';
import {filterWorkouts, getAllExercises} from './AnalyticUtils';
import {BodyPart, MovementType, MuscleGroup} from '../Systems';

function emptyNumberMap<T extends Object>(by: T): Record<keyof T, number> {
  return Object.values(by).reduce((acc, it) => {
    acc[it] = 0;
    return acc;
  }, {});
}

const calcWeeklyFrequency = <T extends Object>(planLength: number, timePerWeek: Record<keyof T, number>) => {
  const weeklyRatio = 7 / planLength;
  return mapObjIndexed((num) => {
    const freq = num * weeklyRatio;
    return {from: Math.floor(freq), to: Math.ceil(freq)};
  }, timePerWeek);
};

export const calculateFrequency = (plan: WorkoutPlan) => {
  const workoutDays = filterWorkouts(plan.days);

  const timesByBodyPart = emptyNumberMap(BodyPart);
  const timesByMuscleGroup = emptyNumberMap(MuscleGroup);
  const timesByMovementType = emptyNumberMap(MovementType);
  workoutDays.forEach((day) => {
    const dailyBodyParts = {} as Record<BodyPart, boolean>;
    const dailyMuscles = {} as Record<MuscleGroup, boolean>;
    const dailyMovements = {} as Record<MovementType, boolean>;
    getAllExercises([day])
      .forEach(({info}) => {
        if (!dailyBodyParts[info.bodyPart]) {
          timesByBodyPart[info.bodyPart] += 1;
          dailyBodyParts[info.bodyPart] = true;
        }
        if (!dailyMovements[info.movementType]) {
          timesByMovementType[info.movementType] += 1;
          dailyMovements[info.movementType] = true;
        }
        if (!dailyMuscles[info.muscleGroup]) {
          timesByMuscleGroup[info.muscleGroup] += 1;
          dailyMuscles[info.muscleGroup] = true;
        }
      });
  });

  const daysInPlan = plan.days.length;
  const freqByBodyPart = calcWeeklyFrequency(daysInPlan, timesByBodyPart);
  const freqByMuscleGroup = calcWeeklyFrequency(daysInPlan, timesByMuscleGroup);
  const freqByMovementType = calcWeeklyFrequency(daysInPlan, timesByMovementType);

  return {
    freqByBodyPart,
    freqByMuscleGroup,
    freqByMovementType
  };
};