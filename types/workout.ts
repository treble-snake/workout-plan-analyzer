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

export type RestDay = {
  isRest: boolean;
}

export type WorkoutDay = {
  title?: string;
  description?: string,
  exercises: (Exercise|Superset)[];
};

export type PlanDay = WorkoutDay | RestDay;

export type WorkoutPlan ={
  title: string;
  shortDescription?: string,
  fullDescription?: string,
  /** Days in the microcycle, 7 by default */
  // microCycleDays: number;
  days: PlanDay[];
}