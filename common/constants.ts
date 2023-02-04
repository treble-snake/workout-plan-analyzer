import {QtyRange, WorkoutPlan} from '../types/workout';

export const COMMON_REP_RANGES: Record<string, QtyRange> = {
  '1_3': {from: 1, to: 3},
  '3_5': {from: 3, to: 5},
  '4_6': {from: 4, to: 6},
  '8_10': {from: 8, to: 10},
  '8_12': {from: 8, to: 12},
  '10_12': {from: 10, to: 12},
  '10_15': {from: 10, to: 15},
  '12_15': {from: 12, to: 15},
  '15_20': {from: 15, to: 20},
  '20_25': {from: 20, to: 25},
  '20_30': {from: 20, to: 30},
  '25_30': {from: 25, to: 30},
};

export const EMPTY_PLAN: WorkoutPlan = Object.freeze({
  id: '',
  isDraft: true,
  title: 'My New Awesome Plan',
  recommendations: 'Warm up recommendations: before the workout you might do 5-10 minutes of light cardio like walking on a treadmill. Before each exercise do a few sets with lower weights until you feel confident and connected to the movement.',
  days: [
    {
      exercises: []
    }
  ]
});