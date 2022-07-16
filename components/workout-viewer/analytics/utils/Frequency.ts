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
    getAllExercises([day])
      .forEach(({info}) => {
        timesByBodyPart[info.bodyPart] += 1;
        timesByMovementType[info.movementType] += 1;
        timesByMuscleGroup[info.muscleGroup] += 1;
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