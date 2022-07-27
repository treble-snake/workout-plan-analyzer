import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {Bad, Doubtful, Good, Great, Okay, Ugly} from './EmojiGrades';
import {isInRange, rangeToText} from '../../../exercises/RangeUtils';
import {Tooltip} from 'antd';

type Props = {
  level: ExperienceLevel;
  muscle: MuscleGroup;
  freq: QtyRange;
}

export const MuscleGroupFrequencyGrade = ({
                                            muscle,
                                            freq,
                                            level,
                                          }: Props) => {
  const landmarks = WeeklySetsPerMuscleGroup[level][muscle];
  const mv = landmarks[VolumeLandmarks.MV];
  const mev = landmarks[VolumeLandmarks.MEV];
  const recFreq = landmarks.frequency;
  const avgFreq = (freq.from + freq.to) / 2;

  const getResult = () => {
    if (avgFreq < 1) {
      if (mev === 0) {
        return <Okay />;
      }

      return mv === 0 ? <Okay /> : <Bad />;
    }

    if (isInRange(avgFreq, recFreq)) {
      return <Great />;
    }

    if (avgFreq >= 1 && avgFreq < 2) {
      return <Okay />;
    }

    if (avgFreq >= 2 && avgFreq < 3) {
      return <Good />;
    }

    if (avgFreq > recFreq.to * 1.5) {
      return level === ExperienceLevel.Beginner ? <Ugly /> : <Doubtful />;
    }

    if (avgFreq > recFreq.to) {
      return level === ExperienceLevel.Beginner ? <Bad /> : <Doubtful />;
    }

    return <Doubtful />;
  };

  return <Tooltip title={`Recommended: ${rangeToText(recFreq)} times/week`}>
    <span style={{cursor: 'help'}}>{getResult()}</span>
  </Tooltip>
};