import {System} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {lifterExperienceState} from '../../../state/ViewerConfigState';
import {Col, Row, Space} from 'antd';
import {MuscleGroupLandmarks} from '../sets/MuscleGroupLandmarks';
import {MuscleGroup} from '../../systems-data/MuscleGroupsValues';
import {MovementTypeLandmarks} from '../sets/MovementTypeLandmarks';
import {MovementType} from '../../systems-data/MovementTypeValues';
import {rangeToText} from '../../../exercises/RangeUtils';
import {VolumeGradeTag} from '../sets/VolumeGradeTag';
import {MuscleGroupFrequencyGrade} from '../sets/MuscleGroupFrequencyGrade';
import {GradedSets} from '../types';
import React, {memo} from 'react';
import {useRecoilValue} from 'recoil';

type Props<T> = {
  system: System,
  sets: GradedSets,
  frequency: QtyRange,
  unit: keyof T
}

export const DetailedAnalyticsRowComponent = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency, unit} = props;
  const experience = useRecoilValue(lifterExperienceState);
  const unitName = String(unit);

  return (
    <Row gutter={10}>
      <Col span={12} style={{marginBottom: 4}}>
        <Space
          style={{display: 'flex', justifyContent: 'space-between'}}>
          {unitName}
          {
            system === System.Muscle &&
            <MuscleGroupLandmarks level={experience}
                                  muscle={unit as MuscleGroup}
                                  freq={frequency}
            />
          }
          {
            system === System.Movement &&
            <MovementTypeLandmarks level={experience}
                                   movement={unit as MovementType} />
          }
        </Space>
      </Col>
      <Col span={6} style={{textAlign: 'center'}}>
        <Row>
          <Col span={12}>
            {rangeToText(sets.sets)}
          </Col>
          <Col span={12} style={{textAlign: 'left'}}>
            <VolumeGradeTag grade={sets.grade} />
          </Col>
        </Row>
      </Col>
      <Col span={6} style={{textAlign: 'center'}}>
        <Row>
          <Col span={system === System.Muscle ? 12 : 24}>
            {rangeToText(frequency)}
          </Col>
          <Col span={system === System.Muscle ? 12 : 0}
               style={{textAlign: 'left'}}>
            {
              system === System.Muscle &&
              <MuscleGroupFrequencyGrade level={experience}
                                         muscle={unit as MuscleGroup}
                                         freq={frequency}
              />
            }
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export const DetailedAnalyticsRow = memo(DetailedAnalyticsRowComponent, (prev, next) => {
  return prev.system === next.system &&
    prev.unit === next.unit &&
    prev.frequency.from === next.frequency.from &&
    prev.frequency.to === next.frequency.to &&
    prev.sets.sets.from === next.sets.sets.from &&
    prev.sets.sets.to === next.sets.sets.to &&
    prev.sets.grade.type === next.sets.grade.type &&
    prev.sets.grade.confidence === next.sets.grade.confidence;
});