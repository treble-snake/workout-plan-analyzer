import {
  ConfidenceLevel,
  VolumeGrade,
  VolumeGradeType
} from '../../utils/grades/Grades';
import {Alert} from 'antd';
import React from 'react';
import {System} from '../../systems-data/SystemsCommon';
import {MovementType} from '../../systems-data/MovementTypeValues';
import {MuscleGroup} from '../../systems-data/MuscleGroupsValues';
import {ToggleHighlightButton} from '../ToggleHighlightButton';

type Props = {
  grade: VolumeGrade,
  system: System,
  unit: MovementType | MuscleGroup
}

const RECS = {
  [VolumeGradeType.Low]: 'too low',
  [VolumeGradeType.Ok]: 'OK',
  [VolumeGradeType.High]: 'too high',
  [VolumeGradeType.TooSpread]: 'too spread',
  [VolumeGradeType.NoInfo]: ''
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

const VolumeGradeInfoComponent = ({grade, system, unit}: Props) => {
  if (grade.type === VolumeGradeType.NoInfo) {
    return null;
  }

  const message = `Your ${unit} training volume ${getWording(grade)}.`;
  return <Alert showIcon
                style={{marginBottom: 10}}
                type={grade.type === VolumeGradeType.Ok ?
                  (grade.confidence === ConfidenceLevel.High ? 'success' : 'info')
                  : 'warning'}
                message={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center'
                    }}>
                    <span>{message}</span>
                    <ToggleHighlightButton system={system} unit={unit}/>
                  </div>
                }
  />;
};

export const VolumeGradeInfo = React.memo(VolumeGradeInfoComponent, (prevProps, nextProps) => {
    return prevProps.grade.type === nextProps.grade.type &&
      prevProps.grade.confidence === nextProps.grade.confidence &&
      prevProps.system === nextProps.system &&
      prevProps.unit === nextProps.unit;
  }
);