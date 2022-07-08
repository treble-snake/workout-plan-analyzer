import {ExerciseInfo} from './exercise';

export type Range = {
  from: number;
  to: number;
}

export type Exercise = {
  info: ExerciseInfo;
  sets: Range;
  reps: Range;
}

export type Superset = {
  description?: string;
  exercises: Exercise[];
};

export type WorkoutDay = {
  title?: string;
  isRest: boolean;
  exercises: (Exercise|Superset)[];
};

export type WorkoutPlan ={
  title: string;
  /** Days in the microcycle, 7 by default */
  microCycleDays: number;
  days: WorkoutDay[];
}