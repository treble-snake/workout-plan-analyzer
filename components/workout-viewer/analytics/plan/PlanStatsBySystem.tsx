import {QtyRange} from '../../../../types/workout';
import {Col, Row, Space} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {System} from '../systems-data/SystemsCommon';
import {LinkOutlined} from '@ant-design/icons';
import {MuscleGroupTotalSetsGrade} from './sets/MuscleGroupTotalSetsGrade';
import {useViewerConfigContext} from '../../ViewerConfigProvider';
import {MuscleGroup} from '../systems-data/MuscleGroupsValues';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import {MovementTypeTotalSetsGrade} from './sets/MovementTypeTotalSetsGrade';
import {MovementType} from '../systems-data/MovementTypeValues';
import {MuscleGroupLandmarks} from './sets/MuscleGroupLandmarks';
import {MovementTypeLandmarks} from './sets/MovementTypeLandmarks';

type Props<T> = {
  system: System,
  sets: Record<keyof T, QtyRange>,
  frequency: Record<keyof T, QtyRange>,
}

const freqToNumber = (freq: QtyRange) => {
  return Math.floor((freq.from + freq.to) / 2);
};

export const PlanStatsBySystem = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {title, units, url} = SystemsMeta[system];
  const {experience} = useViewerConfigContext();

  return (
    <Col span={system === System.BodyPart ? 6 : 9}>
      <b>By {title}</b>
      <p>
        Brief info about {title}.{' '}
        {url && <a href={url} target={'_blank'} rel={'noreferrer noopener'}>
          <LinkOutlined /> Read more
        </a>}
      </p>
      <Row>
        <Col span={6} offset={12}><b>Sets</b></Col>
        <Col span={6}><b>Days/week</b></Col>
      </Row>
      {
        Object.values(units).map((it) => {
          return (
            <Row key={it}>
              <Col span={12}>
                <Space
                  style={{display: 'flex', justifyContent: 'space-between'}}>
                  {it}
                  {
                    system === System.Muscle &&
                    <MuscleGroupLandmarks level={experience}
                                          muscle={it as MuscleGroup}
                                          freq={freqToNumber(frequency[it])}
                    />
                  }
                  {
                    system === System.Movement &&
                    <MovementTypeLandmarks level={experience}
                                           movement={it as MovementType} />
                  }
                </Space>
              </Col>
              <Col span={6}>
                <Row>
                  <Col span={10}>
                    {rangeToText(sets[it])}
                  </Col>
                  <Col span={14}>
                    {
                      system === System.Muscle &&
                      <MuscleGroupTotalSetsGrade level={experience}
                                                 muscle={it as MuscleGroup}
                                                 sets={sets[it]}
                                                 freq={freqToNumber(frequency[it])}
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
              <Col span={6}>{rangeToText(frequency[it])}</Col>
            </Row>
          );
        })
      }
    </Col>
  );
};