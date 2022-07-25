import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {Space, Tag} from 'antd';

type Props = {
  level: ExperienceLevel;
  muscle: MuscleGroup;
  freq: number;
}

export const MuscleGroupLandmarks = ({
                                       muscle, freq, level
                                     }: Props) => {

  if (freq > 5) {
    freq = 5;
  }
  if (freq === 0) {
    freq = 1;
  }

  const landmarks = WeeklySetsPerMuscleGroup[level][muscle];
  const mv = landmarks[VolumeLandmarks.MV];
  const mev = landmarks[VolumeLandmarks.MEV];
  const mrvByFreq = landmarks[VolumeLandmarks.MRV];
  // @ts-ignore
  const mrv = mrvByFreq[freq] as number;

  return <>
    <Tag>MV: {mv}, MEV: {mev}, MRV({freq}): {mrv}</Tag>
  </>
};