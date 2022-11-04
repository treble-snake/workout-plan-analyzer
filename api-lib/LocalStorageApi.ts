import {WorkoutPlan} from '../types/workout';
import {SixDayExamplePlan} from '../temp-data/SixDayExample.tmp.const';
import {DemoProgram} from '../temp-data/DemoProgram.tmp.const';
import {PlanStorageApi} from './index';
import {clone} from 'ramda';

async function listPlans(): Promise<WorkoutPlan[]> {
  return [
    SixDayExamplePlan,
    DemoProgram
  ];
}

async function getPlan(id: string): Promise<WorkoutPlan | undefined> {
  const plans = await listPlans();
  return plans.find(it => it.id === id);
}

const EMPTY_PLAN: WorkoutPlan = Object.freeze({
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

const DRAFT_KEY = 'wpa:draft';


export const LocalStorageApi: PlanStorageApi = {
  listPlans,
  getPlan,
  async createPlan(): Promise<WorkoutPlan> {
    return EMPTY_PLAN;
  },
  async loadDraft(): Promise<WorkoutPlan> {
    const draftJson = localStorage.getItem(DRAFT_KEY)
    if (draftJson) {
      return JSON.parse(draftJson);
    }
    return clone(EMPTY_PLAN);
  },
  async saveDraft(draft: WorkoutPlan): Promise<void> {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  }
};