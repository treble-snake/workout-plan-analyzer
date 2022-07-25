import {useViewerConfigContext} from '../../../ViewerConfigProvider';
import {
  ExperienceLevel
} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {Tag} from 'antd';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {Bad, Doubtful, Good, Great, Okay, Terrible} from './EmojiGrades';

type Props = {
  level: ExperienceLevel;
  muscle: MuscleGroup;
  sets: QtyRange;
  freq: number;
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

  if (freq === 0) {
    if (mev === 0) {
      // return <Tag color={'cyan'}>~EV</Tag>;
      return <Okay />;
    }

    return mv === 0 ?
      <Okay /> : <Bad />;
      // <Tag color={'blue'}>MV</Tag> :
      // <Tag color={'red'}>&lt; MV</Tag>;
  }
  if (freq > 5) {
    freq = 5;
  }

  const mrvByFreq = landmarks[VolumeLandmarks.MRV];
  // @ts-ignore
  const mrv = mrvByFreq[freq] as number;


  if (from < mv) {
    if (to < mv) {
      // return <Tag color={'red'}>&lt; MV</Tag>;
      return <Bad />;
    }

    if (to >= mv && to < mev) {
      // return <Tag color={'geekblue'}>~MV</Tag>;
      return <Okay />;
    }

    if (to >= mev && to < mrv) {
      // return <Tag color={'cyan'}>~EV</Tag>;
      return <Good />;
    }

    if (to > mrv) {
      // return <Tag color={'gold'}>?</Tag>;
      return <Doubtful />;
    }
  }

  if (from >= mv && from < mev) {
    if (to < mev) {
      // return <Tag color={'blue'}>MV</Tag>;
      return <Okay />;
    } else {
      return to > mrv ?
        <Doubtful /> : <Good />;
        // <Tag color={'gold'}>?</Tag> :
        // <Tag color={'cyan'}>~EV</Tag>;
    }
  }

  if (from >= mev && from <= mrv) {
    if (to <= mrv) {
      // return <Tag color={'green'}>EV</Tag>;
      return <Great />;
    } else {
      // return <Tag color={to > mrv * 1.5 ? 'red' : 'gold'}>&gt; MRV</Tag>;
      return to > mrv * 1.5 ? <Terrible /> : <Bad />;
    }
  }

  if (from > mrv) {
    // return <Tag color={from > mrv * 1.5 || to > mrv * 1.5 ? 'red' : 'gold'}>
    //   &gt; MRV
    // </Tag>;
    return from > mrv * 1.5 || to > mrv * 1.5 ? <Terrible /> : <Bad />;
  }

  return null;
};