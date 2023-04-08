import {Exercise, WorkoutPlan} from '../../types/workout';
import {EXERCISES_BY_ID} from '../../temp-data/exercises';
import {clone} from 'ramda';
import {ExerciseInfo} from '../../types/exercise';
import {ExerciseHighlight} from './ViewerConfigProvider';
import {System} from './analytics/systems-data/SystemsCommon';

export const isHighlighted = (exc: Exercise, highlight: ExerciseHighlight | null) => {
  if (!highlight) {
    return false;
  }

  return (
    highlight.system === System.Muscle && exc.info.muscleGroup === highlight.unit ||
    highlight.system === System.Movement && exc.info.movementType === highlight.unit
  );
};

const normalizeExercise = (exc: Exercise): Exercise => {
  const info = EXERCISES_BY_ID[exc.info.id];
  if (!info) {
    throw new Error(`Exercise ${exc.info.id} not found`);
  }
  exc.info = {...exc.info, ...info};
  return exc;
};

const denormalizeExercise = (exc: Exercise): Exercise => {
  exc.info = {id: exc.info.id} as ExerciseInfo;
  return exc;
};

export const normalizePlan = (plan: WorkoutPlan): WorkoutPlan => {
  // TODO: extract and use AnalyticUtils ?
  const newPlan = {...plan};
  newPlan.days.forEach((day) => {
    if ('exercises' in day) {
      day.exercises.forEach((exc) => {
        'exercises' in exc ?
          exc.exercises.forEach(normalizeExercise) :
          normalizeExercise(exc);
      });
    }
  });
  return newPlan;
};

export const denormalizePlan = (plan: WorkoutPlan) => {
  const denormalizedPlan = clone(plan);

  denormalizedPlan.days.forEach((day) => {
    if ('exercises' in day) {
      day.exercises.forEach((exc) => {
        'exercises' in exc ?
          exc.exercises.forEach(denormalizeExercise) :
          denormalizeExercise(exc);
      });
    }
  });

  return denormalizedPlan;
};

export const toBase64 = (plan: WorkoutPlan) => {
  return window.btoa(JSON.stringify(denormalizePlan(plan)));
};

export const fromBase64 = (encoded: string): WorkoutPlan => {
  const denormalizedPlan = JSON.parse(window.atob(encoded));
  return normalizePlan(denormalizedPlan);
};