import {System} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {SystemsMeta} from '../../systems-data/SystemsMeta';
import {Col, Row} from 'antd';
import {GradedSets} from '../types';
import React from 'react';
import {DetailedAnalyticsRow} from './DetailedAnalyticsRow';
import {MuscleGroup} from '../../systems-data/MuscleGroupsValues';
import {MovementType} from '../../systems-data/MovementTypeValues';

type Props<T> = {
  system: System,
  sets: Record<keyof T, GradedSets>,
  frequency: Record<keyof T, QtyRange>,
}

export const DetailedAnalyticsComponent = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {units} = SystemsMeta[system];

  return <>
    <Row>
      <Col style={{textAlign: 'center'}}
           span={6}
           offset={12}><b>Sets</b></Col>
      <Col style={{textAlign: 'center'}}
           span={6}><b>Times/week</b></Col>
    </Row>
    {
      Object.values(units).map((it) => {
        return (
          <DetailedAnalyticsRow
            key={`${system}_${it}`}
            unit={it as MuscleGroup | MovementType}
            system={system}
            sets={sets[it]}
            frequency={frequency[it]}
          />
        );
      })
    }
  </>;
};

const DetailedAnalytics = DetailedAnalyticsComponent;
export default DetailedAnalytics;