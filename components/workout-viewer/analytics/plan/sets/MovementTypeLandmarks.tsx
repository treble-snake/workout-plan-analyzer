import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {Space, Tag} from 'antd';
import {
  MovementType,
  WeeklySetsPerMovementType
} from '../../systems-data/MovementTypeValues';
import {rangeToText} from '../../../exercises/RangeUtils';

type Props = {
  level: ExperienceLevel;
  movement: MovementType;

}

export const MovementTypeLandmarks = ({
                                       movement, level
                                     }: Props) => {

  const {
    Balanced: balanced,
    Specialization: spec
  } = WeeklySetsPerMovementType[level][movement];

  return <>
    <Tag>Balanced: {rangeToText(balanced)}, Spec: {rangeToText(spec)}</Tag>
  </>;
};