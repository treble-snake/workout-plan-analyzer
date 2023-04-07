import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {ConfidenceLevel, VolumeGrade, VolumeGradeType} from './Grades';
import {
  MovementType,
  WeeklySetsPerMovementType
} from '../../systems-data/MovementTypeValues';
import {isInRange} from '../../../exercises/RangeUtils';

type Props = {
  level: ExperienceLevel;
  movement: MovementType;
  sets: QtyRange;
  freq: QtyRange;
}

// TODO: take goals into account - build muscle or maintain?
// TODO: make indirect work affect 0 sets situation
// TODO: count how many specialization sets are there

export const gradeByMovementType = ({
                                      movement,
                                      level,
                                      sets: {from, to}
                                    }: Props): VolumeGrade => {

  const {
    Balanced: balanced,
    Specialization: spec
  } = WeeklySetsPerMovementType[level][movement];

  if (from < balanced.from && to < balanced.from) {
    return to === 0 ?
      {type: VolumeGradeType.Low, confidence: ConfidenceLevel.High} :
      {type: VolumeGradeType.Low, confidence: ConfidenceLevel.Moderate};
  }

  if (from > spec.to) {
    return to > spec.to * 1.5 ?
      {type: VolumeGradeType.High, confidence: ConfidenceLevel.High} :
      {type: VolumeGradeType.High, confidence: ConfidenceLevel.Moderate};
  }

  if (from < balanced.from && to > spec.to) {
    return {type: VolumeGradeType.TooSpread, confidence: ConfidenceLevel.High};
  }

  if (
    (isInRange(from, balanced) && isInRange(to, balanced)) ||
    (isInRange(from, spec) && isInRange(to, spec))
  ) {
    return {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.High};
  }

  if (isInRange(from, balanced) && isInRange(to, spec)) {
    return to - from >= 10 ?
      {type: VolumeGradeType.TooSpread, confidence: ConfidenceLevel.Moderate} :
      {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.Low};
  }

  if (from < balanced.from && isInRange(to, balanced)) {
    return {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.Moderate};
  }

  if (from >= balanced.from && to <= spec.to) {
    return {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.Low};
  }

  if (from < spec.to && to > spec.to) {
    return to > spec.to * 1.5 ?
      {type: VolumeGradeType.High, confidence: ConfidenceLevel.Moderate} :
      {type: VolumeGradeType.High, confidence: ConfidenceLevel.Low};
  }

  return {type: VolumeGradeType.Uncertain, confidence: ConfidenceLevel.Low};
};