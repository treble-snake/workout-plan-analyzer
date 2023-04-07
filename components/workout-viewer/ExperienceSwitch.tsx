import {useViewerConfigContext} from './ViewerConfigProvider';
import {Segmented} from 'antd';
import {ExperienceLevel} from './analytics/systems-data/SystemsCommon';

export const ExperienceSwitch = () => {
  const {experience, setExperience} = useViewerConfigContext();

  return (
    <>
      <span>Lifting Experience:</span>
      <Segmented
        value={experience}
        onChange={(value) => setExperience(value as ExperienceLevel)}
        size={'small'}
        options={Object.values(ExperienceLevel).map((it) => ({
          label: it, value: it
        }))} />
    </>
  );
};