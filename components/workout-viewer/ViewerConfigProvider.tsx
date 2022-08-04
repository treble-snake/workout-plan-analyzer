import {createContext, useContext, useEffect, useState} from 'react';
import {ExperienceLevel} from './analytics/systems-data/SystemsCommon';
import {useWorkoutContext} from './WorkoutProvider';

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

  setExperience: (value: ExperienceLevel) => void;
}

const DEFAULT_CONFIG: ViewerConfigValues = {
  experience: ExperienceLevel.Intermediate,
  mode: ViewerMode.Edit
};

const ViewerConfigContext = createContext<ViewerConfig>({
  ...DEFAULT_CONFIG,
  setMode: () => {
  },
  setExperience: () => {
  }
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
    if(config.mode !== mode) {
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
  }}>
    {children}
  </ViewerConfigContext.Provider>;
};