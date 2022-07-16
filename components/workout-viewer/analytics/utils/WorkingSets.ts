import {filterWorkouts, getAllExercises} from './AnalyticUtils';
import {PlanDay, QtyRange, WorkoutDay} from '../../../../types/workout';
import {sumRanges} from '../../exercises/RangeUtils';
import {BodyPart, MovementType, MuscleGroup} from '../Systems';

function emptyRangeMap<T extends Object>(by: T): Record<keyof T, QtyRange> {
  return Object.values(by).reduce((acc, it) => {
    acc[it] = {from: 0, to: 0};
    return acc;
  }, {});
}

export const calculateWorkingSets = (days: PlanDay[]) => {
  const workoutDays = filterWorkouts(days);

  const allExercises = getAllExercises(workoutDays);
  const setsByBodyPart = emptyRangeMap(BodyPart);
  const setsByMuscleGroup = emptyRangeMap(MuscleGroup);
  const setsByMovementType = emptyRangeMap(MovementType);
  let totalSets = {from: 0, to: 0} as QtyRange;

  allExercises.forEach(({info, sets}) => {
    totalSets = sumRanges(totalSets, sets);
    setsByBodyPart[info.bodyPart] = sumRanges(setsByBodyPart[info.bodyPart], sets);
    setsByMovementType[info.movementType] = sumRanges(setsByMovementType[info.movementType], sets);
    setsByMuscleGroup[info.muscleGroup] = sumRanges(setsByMuscleGroup[info.muscleGroup], sets);
  });

  return {
    totalSets,
    setsByBodyPart,
    setsByMovementType,
    setsByMuscleGroup
  };
}