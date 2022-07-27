import {QUADS_EXERCISES} from './by-muscle/Quads';
import {GLUTES_EXERCISES} from './by-muscle/Glutes';
import {HAMSTRINGS_EXERCISES} from './by-muscle/Hamstrings';
import {CALVES_EXERCISES} from './by-muscle/Calves';
import {BACK_EXERCISES} from './by-muscle/Back';
import {CHEST_EXERCISES} from './by-muscle/Chest';
import {SHOULDERS_EXERCISES} from './by-muscle/Shoulders';
import {ARMS_EXERCISES} from './by-muscle/Arms';
import {indexBy, prop} from 'ramda';

export const ALL_EXERCISES = [
  ...QUADS_EXERCISES,
  ...GLUTES_EXERCISES,
  ...HAMSTRINGS_EXERCISES,
  ...CALVES_EXERCISES,
  ...BACK_EXERCISES,
  ...CHEST_EXERCISES,
  ...SHOULDERS_EXERCISES,
  ...ARMS_EXERCISES
];

export const EXERCISES_BY_ID = indexBy(prop('id'), ALL_EXERCISES);