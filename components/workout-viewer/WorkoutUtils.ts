import {Exercise, WorkoutPlan} from '../../types/workout';
import {EXERCISES_BY_ID} from '../../temp-data/exercises';
import {clone} from 'ramda';
import {ExerciseInfo} from '../../types/exercise';
import {btoa} from 'buffer';

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

export const toBase64 = (plan: WorkoutPlan) => {
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

  return window.btoa(JSON.stringify(denormalizedPlan));
}

export const fromBase64 = (encoded: string): WorkoutPlan => {
  const denormalizedPlan = JSON.parse(window.atob(encoded));
  console.warn('denormalizedPlan', denormalizedPlan);
  return normalizePlan(denormalizedPlan);
}