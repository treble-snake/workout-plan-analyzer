import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {Bad, Doubtful, Good, Great, Okay, Ugly} from './EmojiGrades';

type Props = {
  level: ExperienceLevel;
  muscle: MuscleGroup;
  sets: QtyRange;
  freq: QtyRange;
}

export const MuscleGroupTotalSetsGrade = ({
                                       muscle,
                                       freq,
                                       level,
                                       sets: {from, to}
                                     }: Props) => {
  const landmarks = WeeklySetsPerMuscleGroup[level][muscle];
  const mv = landmarks[VolumeLandmarks.MV];
  const mev = landmarks[VolumeLandmarks.MEV];

  // TODO: make indirect work affect 0 sets

  let avgFreq = Math.floor((freq.from + freq.to) / 2);
  if (avgFreq === 0) {
    if (mev === 0) {
      return <Okay />;
    }

    return mv === 0 ? <Okay /> : <Bad />;
  }

  if (avgFreq > 5) {
    avgFreq = 5;
  }

  const mrv = landmarks[VolumeLandmarks.MRV][avgFreq];

  if (from < mv) {
    if (to < mv) {
      return <Bad />;
    }

    if (to >= mv && to < mev) {
      return <Okay />;
    }

    if (to >= mev && to < mrv) {
      return <Good />;
    }

    if (to > mrv) {
      return <Doubtful />;
    }
  }

  if (from >= mv && from < mev) {
    if (to < mev) {
      return <Okay />;
    } else {
      return to > mrv ? <Doubtful /> : <Good />;
    }
  }

  if (from >= mev && from <= mrv) {
    if (to <= mrv) {
      return from < 3 || to < 3 ? <Good/> : <Great />;
    } else {
      return to > mrv * 1.5 ? <Ugly /> : <Bad />;
    }
  }

  if (from > mrv) {
    return from > mrv * 1.5 || to > mrv * 1.5 ? <Ugly /> : <Bad />;
  }

  return <Doubtful/>;
};