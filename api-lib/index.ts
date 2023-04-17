import {WorkoutPlan} from '../types/workout';
import {LocalStorageApi} from './LocalStorageApi';
import {Theme} from '../components/layout/theme/types';

export interface PlanStorageApi {
  listPlans(): Promise<WorkoutPlan[]>;

  getPlan(id: string): Promise<WorkoutPlan | undefined>;

  createPlan(): Promise<WorkoutPlan>;

  loadDraft(): Promise<WorkoutPlan>;

  saveDraft(draft: WorkoutPlan): Promise<void>;

  savePlan(plan: WorkoutPlan): Promise<string>;

  deletePlan(id: string): Promise<void>;

  // TODO: move to a separate interface
  saveTheme(theme: Theme): Promise<void>;

  getTheme(): Promise<Theme | null>;
}

export const PlanStorage: PlanStorageApi = LocalStorageApi;