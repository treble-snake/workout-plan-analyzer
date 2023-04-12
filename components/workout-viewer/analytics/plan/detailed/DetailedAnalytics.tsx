import {System} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {SystemsMeta} from '../../systems-data/SystemsMeta';
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
import React from 'react';
import {useRecoilValue} from 'recoil';

type Props<T> = {
  system: System,
  sets: Record<keyof T, GradedSets>,
  frequency: Record<keyof T, QtyRange>,
}

export const DetailedAnalytics = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {units} = SystemsMeta[system];
  const experience = useRecoilValue(lifterExperienceState);

  return <><Row>
    <Col style={{textAlign: 'center'}}
         span={6}
         offset={12}><b>Sets</b></Col>
    <Col style={{textAlign: 'center'}}
         span={6}><b>Times/week</b></Col>
  </Row>
    {
      Object.values(units).map((it) => {
        return (
          <Row key={it} gutter={10}>
            <Col span={12} style={{marginBottom: 4}}>
              <Space
                style={{display: 'flex', justifyContent: 'space-between'}}>
                {it}
                {
                  system === System.Muscle &&
                  <MuscleGroupLandmarks level={experience}
                                        muscle={it as MuscleGroup}
                                        freq={frequency[it]}
                  />
                }
                {
                  system === System.Movement &&
                  <MovementTypeLandmarks level={experience}
                                         movement={it as MovementType} />
                }
              </Space>
            </Col>
            <Col span={6} style={{textAlign: 'center'}}>
              <Row>
                <Col span={12}>
                  {rangeToText(sets[it].sets)}
                </Col>
                <Col span={12} style={{textAlign: 'left'}}>
                  <VolumeGradeTag grade={sets[it].grade} />
                </Col>
              </Row>
            </Col>
            <Col span={6} style={{textAlign: 'center'}}>
              <Row>
                <Col span={system === System.Muscle ? 12 : 24}>
                  {rangeToText(frequency[it])}
                </Col>
                <Col span={system === System.Muscle ? 12 : 0}
                     style={{textAlign: 'left'}}>
                  {
                    system === System.Muscle &&
                    <MuscleGroupFrequencyGrade level={experience}
                                               muscle={it as MuscleGroup}
                                               freq={frequency[it]}
                    />
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })
    }
  </>;
};

export default React.memo(DetailedAnalytics);