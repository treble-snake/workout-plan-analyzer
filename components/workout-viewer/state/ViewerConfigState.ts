import {ExperienceLevel, System} from '../analytics/systems-data/SystemsCommon';
import {MovementType} from '../analytics/systems-data/MovementTypeValues';
import {MuscleGroup} from '../analytics/systems-data/MuscleGroupsValues';
import {atom, selector, selectorFamily} from 'recoil';
import {workoutPlanState} from './workout/WorkoutPlanState';

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
  default: selector({
    key: 'viewerEditingModeDefault',
    get: ({get}) => {
      const plan = get(workoutPlanState);
      if (plan.isDemo || plan.isShared) {
        return ViewerMode.View;
      }
      return ViewerMode.Edit;
    }
  })
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

export const isExerciseHighlightedSelector = selectorFamily({
  key: 'isExerciseHighlighted',
  get: (exc: { muscle: MuscleGroup, movement: MovementType }) => ({get}) => {
    const current = get(highlightedExercisesState);
    if (!current) {
      return false;
    }
    return current.system === System.Muscle && current.unit === exc.muscle ||
      current.system === System.Movement && current.unit === exc.movement;
  }
});