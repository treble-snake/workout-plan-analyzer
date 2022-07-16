import {PlanDay, WorkoutDay} from '../../../../types/workout';

export const flattenWorkload = (workload: WorkoutDay['exercises']) => {
  return workload.flatMap((it) => {
    return 'exercises' in it ? it.exercises : it;
  });
};

export const getAllExercises = (days: WorkoutDay[]) => {
  return flattenWorkload(days.flatMap(it => it.exercises));
};

export const filterWorkouts = (days: PlanDay[]) =>
  days.filter(it => !('isRest' in it)) as WorkoutDay[];