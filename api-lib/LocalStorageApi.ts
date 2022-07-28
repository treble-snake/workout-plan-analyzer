import {WorkoutPlan} from '../types/workout';
import {SixDayExamplePlan} from '../temp-data/SixDayExample.tmp.const';
import {DemoProgram} from '../temp-data/DemoProgram.tmp.const';

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

export const LocalStorageApi = {
  listPlans,
  getPlan
};