import {PlanDay, WorkoutPlan} from '../types/workout';

export const EMPTY_PLAN: WorkoutPlan = Object.freeze({
  id: '',
  isDraft: true,
  title: 'My New Awesome Plan',
  recommendations: 'Warm up recommendations: before the workout you might do 5-10 minutes of light cardio like walking on a treadmill. Before each exercise do a few sets with lower weights until you feel confident and connected to the movement.',
  days: Object.freeze([]) as unknown as PlanDay[]
});