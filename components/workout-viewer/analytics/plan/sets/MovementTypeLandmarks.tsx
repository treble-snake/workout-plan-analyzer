import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {Tag} from 'antd';
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

  const landmarks = WeeklySetsPerMovementType[level][movement];
  if (!landmarks) {
    return <Tag>No recommendations</Tag>
  }

  const {
    Balanced: balanced,
    Specialization: spec
  } = landmarks;

  return <>
    <Tag>Balanced: {rangeToText(balanced)}, Spec: {rangeToText(spec)}</Tag>
  </>;
};