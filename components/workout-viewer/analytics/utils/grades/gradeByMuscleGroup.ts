import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {
  MuscleGroup,
  VolumeLandmarks,
  WeeklySetsPerMuscleGroup
} from '../../systems-data/MuscleGroupsValues';
import {QtyRange} from '../../../../../types/workout';
import {ConfidenceLevel, VolumeGrade, VolumeGradeType} from './Grades';

type Props = {
  level: ExperienceLevel;
  muscle: MuscleGroup;
  sets: QtyRange;
  freq: QtyRange;
}

// TODO: take goals into account - build muscle or maintain?
// TODO: make indirect work affect 0 sets situation

export const gradeByMuscleGroup = ({
                                            muscle,
                                            freq,
                                            level,
                                            sets: {from, to}
                                          }: Props): VolumeGrade => {
  const landmarks = WeeklySetsPerMuscleGroup[level][muscle];
  const maintenanceVol = landmarks[VolumeLandmarks.MV];
  const minVol = landmarks[VolumeLandmarks.MEV];

  let avgFreq = Math.floor((freq.from + freq.to) / 2);
  // if a body part is not trained
  if (avgFreq === 0) {
    // if effective volume is 0, it's OK not to train it
    if (minVol === 0) {
      return {type: VolumeGradeType.Low, confidence: ConfidenceLevel.Low};
    }

    return maintenanceVol === 0 ?
      // if at least maintenance volume is 0, it's kinda fine if you don't want it to grow
      {type: VolumeGradeType.Low, confidence: ConfidenceLevel.Moderate} :
      // otherwise you most likely want some volume at least
      {type: VolumeGradeType.Low, confidence: ConfidenceLevel.High};
  }

  if (avgFreq > 5) {
    avgFreq = 5;
  }

  const maxVol = landmarks[VolumeLandmarks.MRV][avgFreq];

  // the lower end of sets is below maintenance
  if (from < maintenanceVol) {
    // all below maintenance, muscle loss risk
    if (to < maintenanceVol) {
      return {type: VolumeGradeType.Low, confidence: ConfidenceLevel.Moderate};
    }

    // at least higher end is above maintenance, still not ideal
    if (to >= maintenanceVol && to < minVol) {
      return {type: VolumeGradeType.Low, confidence: ConfidenceLevel.Low};
    }

    if (to >= minVol && to < maxVol) {
      return {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.Moderate};
    }

    if (to > maxVol) {
      return {type: VolumeGradeType.TooSpread, confidence: ConfidenceLevel.High};
    }
  }

  // the lower end of sets is between maintenance and min effective volume
  // so we are at least at maintenance
  if (from >= maintenanceVol && from < minVol) {
    if (to < minVol) {
      return {type: VolumeGradeType.Low, confidence: ConfidenceLevel.Low};
    } else {
      return to > maxVol ?
        {type: VolumeGradeType.TooSpread, confidence: ConfidenceLevel.Moderate} :
        {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.Moderate};
    }
  }

  // the lower end of sets is on point
  if (from >= minVol && from <= maxVol) {
    if (to <= maxVol) {
      return (from < 3 || to < 3) ?
        {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.Moderate} :
        {type: VolumeGradeType.Ok, confidence: ConfidenceLevel.High};
    } else {
      // the high end is too much
      return to > maxVol * 1.5 ?
        {type: VolumeGradeType.High, confidence: ConfidenceLevel.High} :
        {type: VolumeGradeType.High, confidence: ConfidenceLevel.Moderate};
    }
  }

  if (from > maxVol) {
    return (from > maxVol * 1.5 || to > maxVol * 1.5) ?
      {type: VolumeGradeType.High, confidence: ConfidenceLevel.High} :
      {type: VolumeGradeType.High, confidence: ConfidenceLevel.Moderate};
  }

  return {type: VolumeGradeType.Uncertain, confidence: ConfidenceLevel.Low};
};