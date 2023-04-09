import {
  Exercise,
  PlanDay,
  RestDay,
  WorkoutDay,
  WorkoutPlan
} from '../../types/workout';
import {EXERCISES_BY_ID} from '../../temp-data/exercises';
import {clone} from 'ramda';
import {ExerciseInfo} from '../../types/exercise';
import {ExerciseHighlight} from './state/ViewerConfigState';
import {System} from './analytics/systems-data/SystemsCommon';
import {v4} from 'uuid';

export const makeNewDay = (isRest = false) => {
  const day = {id: v4()};
  if (isRest) {
    (day as RestDay).isRest = true;
  } else {
    (day as WorkoutDay).exercises = [];
  }
  return day as PlanDay;
};

export const isHighlighted = (exc: Exercise, highlight: ExerciseHighlight | null) => {
  if (!highlight) {
    return false;
  }

  return (
    highlight.system === System.Muscle && exc.info.muscleGroup === highlight.unit ||
    highlight.system === System.Movement && exc.info.movementType === highlight.unit
  );
};

const denormalizeExercise = (exc: Exercise): Exercise => {
  const info = EXERCISES_BY_ID[exc.info.id];
  if (!info) {
    throw new Error(`Exercise ${exc.info.id} not found`);
  }

  exc.info = {...exc.info, ...info};
  return exc;
};

const normalizeExercise = (exc: Exercise): Exercise => {
  exc.info = {id: exc.info.id} as ExerciseInfo;
  return exc;
};

export const denormalizePlan = (plan: WorkoutPlan): WorkoutPlan => {
  // TODO: extract and use AnalyticUtils ?
  const newPlan = clone(plan);
  newPlan.days.forEach((day) => {
    // TODO: remove this hack ?
    if (!day.id) {
      console.warn('NORMALIZING PLAN WITH IDS');
      day.id = v4();
    }
    if ('exercises' in day) {
      day.exercises.forEach(denormalizeExercise);
    }
  });
  return newPlan;
};

export const normalizePlan = (plan: WorkoutPlan) => {
  const denormalizedPlan = clone(plan);

  denormalizedPlan.days.forEach((day) => {
    if (!day.id) {
      day.id = v4();
    }
    if ('exercises' in day) {
      day.exercises.forEach(normalizeExercise);
    }
  });

  return denormalizedPlan;
};

export const toBase64 = (plan: WorkoutPlan) => {
  return window.btoa(JSON.stringify(normalizePlan(plan)));
};

export const fromBase64 = (encoded: string): WorkoutPlan => {
  const denormalizedPlan = JSON.parse(window.atob(encoded));
  return denormalizePlan(denormalizedPlan);
};