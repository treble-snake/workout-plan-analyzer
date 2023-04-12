import {Card, Row} from 'antd';
import {PlanStatsBySystem} from './PlanStatsBySystem';
import {System} from '../systems-data/SystemsCommon';
import {useRecoilValue} from 'recoil';
import React from 'react';
import {workoutTotalStatsSelector} from '../../state/workout/WorkoutStatsState';
import {AnalyticsHeader} from './AnalyticsHeader';
import {AnalyticsBasicInfoComponent} from './AnalyticsBasicInfo';

export const PlanAnalytics = () => {
  const {totalSets} = useRecoilValue(workoutTotalStatsSelector);
  console.debug('PlanAnalytics render');
  return (
    <Card title={<AnalyticsHeader />}
          size={'small'}
          style={{marginTop: 10}}
    >
      <AnalyticsBasicInfoComponent />
      {
        totalSets.to > 0 &&
        <Row gutter={8}>
          <PlanStatsBySystem system={System.Muscle} />
          <PlanStatsBySystem system={System.Movement} />
        </Row>
      }
    </Card>
  );
};