import {QtyRange} from '../../../../types/workout';
import {Col, Spin} from 'antd';
import {System} from '../systems-data/SystemsCommon';
import {
  AnalyticsMode,
  useViewerConfigContext
} from '../../ViewerConfigProvider';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import {GradedSets} from './types';
import React, {Suspense} from 'react';

const SimpleAnalytics = React.lazy(() => import('./simple/SimpleAnalytics'));
const DetailedAnalytics = React.lazy(() => import('./detailed/DetailedAnalytics'));

type Props<T> = {
  system: System,
  sets: Record<keyof T, GradedSets>,
  frequency: Record<keyof T, QtyRange>,
}

export const PlanStatsBySystem = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {title, description} = SystemsMeta[system];
  const {analyticsMode} = useViewerConfigContext();

  return (
    <Col xl={12} md={24} xxl={9}>
      <b>By {title}</b>
      {description && <p>{description}</p>}
      {
        analyticsMode === AnalyticsMode.Simple &&
        <Suspense fallback={<Spin size={'large'}/>}>
          <SimpleAnalytics system={system} sets={sets} frequency={frequency} />
        </Suspense>
      }
      {
        analyticsMode === AnalyticsMode.Detailed &&
        <Suspense fallback={<Spin size={'large'}/>}>
          <DetailedAnalytics system={system} sets={sets}
                             frequency={frequency} />
        </Suspense>
      }
    </Col>
  );
};