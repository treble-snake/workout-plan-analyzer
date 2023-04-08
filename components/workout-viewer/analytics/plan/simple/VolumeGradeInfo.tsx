import {
  ConfidenceLevel,
  VolumeGrade,
  VolumeGradeType
} from '../../utils/grades/Grades';
import {Alert, Button, Space, Tooltip} from 'antd';
import React from 'react';
import {BulbTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';
import {System} from '../../systems-data/SystemsCommon';
import {MovementType} from '../../systems-data/MovementTypeValues';
import {MuscleGroup} from '../../systems-data/MuscleGroupsValues';
import {useViewerConfigContext} from '../../../ViewerConfigProvider';

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

type InfoMessageProps = {
  msg: string,
  system: System,
  unit: MovementType | MuscleGroup
}

const InfoMessage = ({msg, unit, system}: InfoMessageProps) => {
  const {highlightedExercises: highlight, highlightExercises} = useViewerConfigContext();

  const highlightColor = (
    highlight && system === highlight.system && unit === highlight.unit
  ) ? '#eba02f' : '#b6b6b6';

  const toggleHighlight = () => {
    if (highlight && system === highlight.system && unit === highlight.unit) {
      highlightExercises(null);
    } else {
      highlightExercises({unit, system});
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }}>
      <span>{msg}</span>
      <Space>
        <Tooltip title={'Highlight exercises'}>
          <Button
            onClick={toggleHighlight}
            icon={<BulbTwoTone twoToneColor={highlightColor} />}
          />
        </Tooltip>
      </Space>
    </div>
  );
};

export const VolumeGradeInfo = ({grade, system, unit}: Props) => {
  if (grade.type === VolumeGradeType.NoInfo) {
    return null;
  }

  const message = `Your ${unit} training volume ${getWording(grade)}.`;

  return <Alert showIcon
                style={{marginBottom: 10}}
                type={grade.type === VolumeGradeType.Ok ?
                  (grade.confidence === ConfidenceLevel.High ? 'success' : 'info')
                  : 'warning'}
                message={<InfoMessage msg={message} unit={unit} system={system} />}
  />;
};