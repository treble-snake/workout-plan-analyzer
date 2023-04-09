import {lifterExperienceState} from '../state/ViewerConfigState';
import {Segmented} from 'antd';
import {ExperienceLevel} from './systems-data/SystemsCommon';
import {useRecoilState} from 'recoil';

export const ExperienceSwitch = () => {
  const [experience, setExperience] = useRecoilState(lifterExperienceState);

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