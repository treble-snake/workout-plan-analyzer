import {QtyRange} from '../../../../types/workout';
import {Col, Row, Space} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {System} from '../systems-data/SystemsCommon';
import {MuscleGroupTotalSetsGrade} from './sets/MuscleGroupTotalSetsGrade';
import {useViewerConfigContext} from '../../ViewerConfigProvider';
import {MuscleGroup} from '../systems-data/MuscleGroupsValues';
import {MovementTypeTotalSetsGrade} from './sets/MovementTypeTotalSetsGrade';
import {MovementType} from '../systems-data/MovementTypeValues';
import {MuscleGroupLandmarks} from './sets/MuscleGroupLandmarks';
import {MovementTypeLandmarks} from './sets/MovementTypeLandmarks';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import {MuscleGroupFrequencyGrade} from './sets/MuscleGroupFrequencyGrade';

type Props<T> = {
  system: System,
  sets: Record<keyof T, QtyRange>,
  frequency: Record<keyof T, QtyRange>,
}

export const PlanStatsBySystem = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {title, units, description} = SystemsMeta[system];
  const {experience} = useViewerConfigContext();

  const isBodyPart = system === System.BodyPart;
  return (
    <Col span={isBodyPart ? 6 : 9}>
      <b>By {title}</b>
      {description &&
        <p>{description}</p>
      }
      <Row>
        <Col style={{textAlign: 'center'}}
             span={isBodyPart ? 8 : 6}
             offset={isBodyPart ? 8 : 12}><b>Sets</b></Col>
        <Col style={{textAlign: 'center'}}
             span={isBodyPart ? 8 : 6}><b>Times/week</b></Col>
      </Row>
      {
        Object.values(units).map((it) => {
          return (
            <Row key={it} gutter={10}>
              <Col span={isBodyPart ? 8 : 12} style={{marginBottom: 4}}>
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
              <Col span={isBodyPart ? 8 : 6} style={{textAlign: 'center'}}>
                <Row>
                  <Col span={12}>
                    {rangeToText(sets[it])}
                  </Col>
                  <Col span={12} style={{textAlign: 'left'}}>
                    {
                      system === System.Muscle &&
                      <MuscleGroupTotalSetsGrade level={experience}
                                                 muscle={it as MuscleGroup}
                                                 sets={sets[it]}
                                                 freq={frequency[it]}
                      />
                    }
                    {
                      system === System.Movement &&
                      <MovementTypeTotalSetsGrade level={experience}
                                                  movement={it as MovementType}
                                                  sets={sets[it]}
                      />
                    }
                  </Col>
                </Row>
              </Col>
              <Col span={isBodyPart ? 8 : 6} style={{textAlign: 'center'}}>
                <Row>
                  <Col span={system === System.Muscle ? 12 : 24}>
                    {rangeToText(frequency[it])}
                  </Col>
                  <Col span={system === System.Muscle ? 12 : 0} style={{textAlign: 'left'}}>
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
    </Col>
  );
};