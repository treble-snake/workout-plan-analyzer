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

export type RestDay = {
  id: string;
  title?: string;
  isRest: boolean;
}

export type ExerciseList = Exercise[];

export type WorkoutDay = {
  id: string;
  title?: string;
  description?: string,
  exercises: ExerciseList;
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