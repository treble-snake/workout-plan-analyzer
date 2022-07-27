import {createContext, useContext, useState} from 'react';
import {Exercise, Superset, WorkoutDay, WorkoutPlan} from '../../types/workout';
import {ExperienceLevel} from './analytics/systems-data/SystemsCommon';

export enum ViewerMode {
  View = 'View',
  Edit = 'Edit'
}

interface ViewerConfigValues {
  mode: ViewerMode;

  experience: ExperienceLevel;
}

interface ViewerConfig extends ViewerConfigValues {
  setMode: (mode: ViewerMode) => void;

  setExperience: (value: ExperienceLevel) => void
}

const DEFAULT_CONFIG = {
  experience: ExperienceLevel.Intermediate,
  mode: ViewerMode.Edit
};

const ViewerConfigContext = createContext<ViewerConfig>({
  ...DEFAULT_CONFIG,
  setMode: () => {},
  setExperience: () => {}
});

export const useViewerConfigContext = () => {
  return useContext(ViewerConfigContext);
};

export const ViewerConfigProvider = ({children}: any) => {
  const [config, setConfig] = useState<ViewerConfigValues>(DEFAULT_CONFIG);

  return <ViewerConfigContext.Provider value={{
    ...config,
    setMode: (mode) => setConfig({...config, mode}),
    setExperience: (experience) => setConfig({...config, experience}),
  }}>
    {children}
  </ViewerConfigContext.Provider>;
};