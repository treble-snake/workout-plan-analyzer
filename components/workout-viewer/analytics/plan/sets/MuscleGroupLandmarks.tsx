import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {Tag} from 'antd';
import {QtyRange} from '../../../../../types/workout';

type Props = {
  level: ExperienceLevel;
  muscle: MuscleGroup;
  freq: QtyRange;
}

export const MuscleGroupLandmarks = ({
                                       muscle, freq, level
                                     }: Props) => {
  let avgFreq = Math.floor((freq.from + freq.to) / 2);
  if (avgFreq > 5) {
    avgFreq = 5;
  }
  if (avgFreq === 0) {
    avgFreq = 1;
  }

  const landmarks = WeeklySetsPerMuscleGroup[level][muscle];
  const mv = landmarks[VolumeLandmarks.MV];
  const mev = landmarks[VolumeLandmarks.MEV];
  const mrv = landmarks[VolumeLandmarks.MRV][avgFreq];

  return <Tag>
    MV: {mv}, MEV: {mev}, MRV({avgFreq}): {mrv}
  </Tag>;
};