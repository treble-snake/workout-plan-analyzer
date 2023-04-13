import {WorkoutPlan} from '../types/workout';
import {SixDayExamplePlan} from '../temp-data/SixDayExample.tmp.const';
import {DemoProgram} from '../temp-data/DemoProgram.tmp.const';
import {PlanStorageApi} from './index';
import {v4} from 'uuid';
import {EMPTY_PLAN} from '../common/constants';
import {
  denormalizePlan,
  normalizePlan
} from '../components/workout-viewer/WorkoutUtils';

const DRAFT_KEY = 'wpa:draft';
const PLANS_PREFIX_KEY = 'wpa:saved-plans';

function fetchPlans(): WorkoutPlan[] {
  const json = localStorage.getItem(PLANS_PREFIX_KEY) ?? '[]';
  return JSON.parse(json);
}

function savePlans(data: WorkoutPlan[]) {
  localStorage.setItem(PLANS_PREFIX_KEY, JSON.stringify(data));
}

export const LocalStorageApi: PlanStorageApi = {
  listPlans: () => Promise.resolve([
    SixDayExamplePlan,
    DemoProgram,
    ...fetchPlans()
  ]),
  getPlan: async function (id: string): Promise<WorkoutPlan | undefined> {
    const plans = await this.listPlans();
    const find = plans.find(it => it.id === id);
    if (!find) {
      throw new Error('Plan not found');
    }
    return find;
  },
  async createPlan(): Promise<WorkoutPlan> {
    return denormalizePlan(EMPTY_PLAN);
  },
  async loadDraft(): Promise<WorkoutPlan> {
    const draftJson = localStorage.getItem(DRAFT_KEY);
    return draftJson ? JSON.parse(draftJson) : EMPTY_PLAN;
  },
  async saveDraft(draft: WorkoutPlan): Promise<void> {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(normalizePlan(draft)));
  },
  async savePlan(plan: WorkoutPlan): Promise<string> {
    const {isDraft, isChanged, isShared, ...data} = plan;
    const storedPlans: WorkoutPlan[] = fetchPlans();
    const normalizedPlan = normalizePlan(data);

    // saving from a shared tab (or a new plan?), so it's a new one anyway
    if (isShared || isDraft || !normalizedPlan.id) {
      normalizedPlan.id = v4();
      storedPlans.push(normalizedPlan);
    } else {
      const existingIndex = storedPlans.findIndex(it => it.id === normalizedPlan.id);
      if (existingIndex !== -1) {
        storedPlans[existingIndex] = normalizedPlan;
      } else {
        storedPlans.push(normalizedPlan);
      }
    }
    savePlans(storedPlans);
    return normalizedPlan.id;
  },
  async deletePlan(id: string): Promise<void> {
    savePlans(fetchPlans().filter(it => it.id !== id));
  }
};