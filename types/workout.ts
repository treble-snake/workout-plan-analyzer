import {ExerciseInfo} from './exercise';

export type QtyRange = {
  from: number;
  to: number;
}

export type Exercise = {
  info: ExerciseInfo;
  sets: QtyRange;
  reps: QtyRange;
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
  id: string;
  isDraft?: boolean;
  isShared?: boolean;
  isChanged?: boolean;
  isDemo?: boolean;
  title: string;
  recommendations?: string,
  days: PlanDay[];
}