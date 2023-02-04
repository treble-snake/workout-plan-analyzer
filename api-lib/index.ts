import {WorkoutPlan} from '../types/workout';
import {LocalStorageApi} from './LocalStorageApi';


export interface PlanStorageApi {
  listPlans(): Promise<WorkoutPlan[]>;

  getPlan(id: string): Promise<WorkoutPlan | undefined>;

  createPlan(): Promise<WorkoutPlan>;

  loadDraft(): Promise<WorkoutPlan>;

  saveDraft(draft: WorkoutPlan): Promise<void>;

  savePlan(plan: WorkoutPlan): Promise<string>;

  deletePlan(id: string): Promise<void>;
}

export const PlanStorage: PlanStorageApi = LocalStorageApi;