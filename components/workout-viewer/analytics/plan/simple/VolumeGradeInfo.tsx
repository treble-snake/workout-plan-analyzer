import {
  ConfidenceLevel,
  VolumeGrade,
  VolumeGradeType
} from '../../utils/grades/Grades';
import {Alert} from 'antd';
import React from 'react';

type Props = {
  grade: VolumeGrade,
  unit: string
}

const RECS = {
  [VolumeGradeType.Low]: 'too low',
  [VolumeGradeType.Ok]: 'OK',
  [VolumeGradeType.High]: 'too high',
  [VolumeGradeType.TooSpread]: 'too spread'
};

const CONFIDENCE = {
  [ConfidenceLevel.Low]: 'might be',
  [ConfidenceLevel.Moderate]: 'is possibly',
  [ConfidenceLevel.High]: 'is most likely'
};

const getWording = (grade: VolumeGrade): string => {
  if (grade.type === VolumeGradeType.Uncertain) {
    return 'is hard to assess. Try the detailed view for more information.';
  }

  return `${CONFIDENCE[grade.confidence]} ${RECS[grade.type]}`;
};

export const VolumeGradeInfo = ({grade, unit}: Props) => {
  return <Alert showIcon
                style={{marginBottom: 10}}
                type={grade.type === VolumeGradeType.Ok ?
                  (grade.confidence === ConfidenceLevel.High ? 'success' : 'info')
                  : 'warning'}
                message={`Your ${unit} training volume ${getWording(grade)}.`}
  />;
};