import {Exercise, QtyRange, WorkoutDay} from '../../../types/workout';

export const flattenWorkload = (workload: WorkoutDay['exercises']) => {
  return workload.flatMap((it) => {
    return 'exercises' in it ? it.exercises : it;
  });
};

export const getTotalSets = (exercises: Exercise[]) => {
  return exercises.reduce((acc, it) => {
    acc.from += it.sets.from;
    acc.to += it.sets.to;
    return acc;
  }, {from: 0, to: 0} as QtyRange);
};