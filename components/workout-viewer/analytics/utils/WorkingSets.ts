import {filterWorkouts, getAllExercises} from './AnalyticUtils';
import {PlanDay, QtyRange} from '../../../../types/workout';
import {sumRanges} from '../../exercises/RangeUtils';
import {MuscleGroup} from '../systems-data/MuscleGroupsValues';
import {MovementType} from '../systems-data/MovementTypeValues';

function emptyRangeMap<T extends Object>(by: T): Record<keyof T, QtyRange> {
  return Object.values(by).reduce((acc, it) => {
    acc[it] = {from: 0, to: 0};
    return acc;
  }, {});
}

export const calculateWorkingSets = (days: PlanDay[]) => {
  const workoutDays = filterWorkouts(days);

  const allExercises = getAllExercises(workoutDays);
  const setsByMuscleGroup = emptyRangeMap(MuscleGroup);
  const setsByMovementType = emptyRangeMap(MovementType);
  let totalSets = {from: 0, to: 0} as QtyRange;

  allExercises.forEach(({info, sets}) => {
    // TODO: wtf???
    try {
      totalSets = sumRanges(totalSets, sets);
      setsByMovementType[info.movementType] = sumRanges(setsByMovementType[info.movementType], sets);
      setsByMuscleGroup[info.muscleGroup] = sumRanges(setsByMuscleGroup[info.muscleGroup], sets);
    } catch (e) {
      console.error('Working sets calc error for', info, sets);
    }
  });

  return {
    totalSets,
    setsByMovementType,
    setsByMuscleGroup
  };
}