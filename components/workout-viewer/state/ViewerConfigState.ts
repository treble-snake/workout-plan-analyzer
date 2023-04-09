import {ExperienceLevel, System} from '../analytics/systems-data/SystemsCommon';
import {MovementType} from '../analytics/systems-data/MovementTypeValues';
import {MuscleGroup} from '../analytics/systems-data/MuscleGroupsValues';
import {atom} from 'recoil';

export enum ViewerMode {
  View = 'View',
  Edit = 'Edit'
}

export enum AnalyticsMode {
  Simple = 'Simple',
  Detailed = 'Detailed'
}

export enum SimpleViewMode {
  WarningsOnly = 'WarningsOnly',
  All = 'All',
}

export type ExerciseHighlight = {
  system: System;
  unit: MovementType | MuscleGroup;
}

export const viewerEditingModeState = atom({
  key: 'viewerEditingMode',
  default: ViewerMode.Edit,
});

export const lifterExperienceState = atom({
  key: 'lifterExperience',
  default: ExperienceLevel.Intermediate,
});

export const analyticsModeState = atom({
  key: 'analyticsMode',
  default: AnalyticsMode.Simple,
});

export const simpleViewModeState = atom({
  key: 'simpleViewMode',
  default: SimpleViewMode.WarningsOnly,
});

export const highlightedExercisesState = atom<ExerciseHighlight | null>({
  key: 'highlightedExercises',
  default: null
});
