import {createContext, useContext, useEffect, useState} from 'react';
import {ExperienceLevel, System} from './analytics/systems-data/SystemsCommon';
import {useWorkoutContext} from './WorkoutProvider';
import {identity} from 'ramda';
import {MovementType} from './analytics/systems-data/MovementTypeValues';
import {MuscleGroup} from './analytics/systems-data/MuscleGroupsValues';

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

interface ViewerConfigValues {
  mode: ViewerMode;

  experience: ExperienceLevel;

  analyticsMode: AnalyticsMode;

  simpleViewMode: SimpleViewMode;

  highlightedExercises: ExerciseHighlight | null;
}

interface ViewerConfig extends ViewerConfigValues {
  setMode: (mode: ViewerMode) => void;

  setExperience: (value: ExperienceLevel) => void;

  setAnalyticsMode: (mode: AnalyticsMode) => void;

  setSimpleViewMode: (mode: SimpleViewMode) => void;

  highlightExercises: (unit: ExerciseHighlight | null) => void;
}

const DEFAULT_CONFIG: ViewerConfigValues = {
  experience: ExperienceLevel.Intermediate,
  mode: ViewerMode.Edit,
  analyticsMode: AnalyticsMode.Simple,
  simpleViewMode: SimpleViewMode.WarningsOnly,
  highlightedExercises: null
};

const ViewerConfigContext = createContext<ViewerConfig>({
  ...DEFAULT_CONFIG,
  setMode: identity,
  setExperience: identity,
  setAnalyticsMode: identity,
  setSimpleViewMode: identity,
  highlightExercises: identity
});

export const useViewerConfigContext = () => {
  return useContext(ViewerConfigContext);
};

type Props = {
  children: any;
}

export const ViewerConfigProvider = ({children}: Props) => {
  const {plan} = useWorkoutContext();
  const [config, setConfig] = useState<ViewerConfigValues>(DEFAULT_CONFIG);

  useEffect(() => {
    const mode = plan.isDraft ? ViewerMode.Edit : ViewerMode.View;
    if (config.mode !== mode) {
      setConfig({...config, mode});
    }
  }, []);

  // TODO: setMode from WorkoutProvider causes infinite loop if not checked
  //       it might be a smell. Having WorkoutProvider inside ConfigProvider seems wrong.
  return <ViewerConfigContext.Provider value={{
    ...config,
    setMode: (mode) =>
      mode !== config.mode && setConfig({...config, mode}),
    setExperience: (experience) =>
      experience !== config.experience && setConfig({...config, experience}),
    setAnalyticsMode: (mode: AnalyticsMode) =>
      mode !== config.analyticsMode && setConfig({...config, analyticsMode: mode}),
    setSimpleViewMode: (mode: SimpleViewMode) =>
      mode !== config.simpleViewMode && setConfig({...config, simpleViewMode: mode}),
    highlightExercises: (unit: ExerciseHighlight | null) => {
      setConfig({...config, highlightedExercises: unit});
    }
  }}>
    {children}
  </ViewerConfigContext.Provider>;
};