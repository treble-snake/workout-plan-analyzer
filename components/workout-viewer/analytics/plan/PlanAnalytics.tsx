import {Card, Row} from 'antd';
import {PlanStatsBySystem} from './PlanStatsBySystem';
import {System} from '../systems-data/SystemsCommon';
import React from 'react';
import {AnalyticsHeader} from './AnalyticsHeader';
import {AnalyticsBasicInfo} from './AnalyticsBasicInfo';

export const PlanAnalytics = () => {
  return (
    <Card title={<AnalyticsHeader />}
          size={'small'}
          style={{marginTop: 10}}
    >
      <AnalyticsBasicInfo />
      <Row gutter={8}>
          <PlanStatsBySystem system={System.Muscle} />
          <PlanStatsBySystem system={System.Movement} />
      </Row>
    </Card>
  );
};