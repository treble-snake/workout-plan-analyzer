import {Col, Spin} from 'antd';
import {System} from '../systems-data/SystemsCommon';
import {AnalyticsMode, analyticsModeState} from '../../state/ViewerConfigState';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import React, {Suspense} from 'react';
import {useRecoilValue} from 'recoil';
import {workoutTotalStatsSelector} from '../../state/workout/WorkoutStatsState';

const SimpleAnalytics = React.lazy(() => import('./simple/SimpleAnalytics'));
const DetailedAnalytics = React.lazy(() => import('./detailed/DetailedAnalytics'));

type Props<T> = {
  system: System,
}

export const PlanStatsBySystem = <T extends Record<string, string>>(props: Props<T>) => {
  const {system} = props;
  const {title, description} = SystemsMeta[system];
  const analyticsMode = useRecoilValue(analyticsModeState);
  const {
    setsByMuscle,
    musclesFrequency,
    setsByMovement,
    movementsFrequency
  } = useRecoilValue(workoutTotalStatsSelector);

  const sets = system === System.Muscle ? setsByMuscle : setsByMovement;
  const frequency = system === System.Muscle ? musclesFrequency : movementsFrequency;

  return (
    <Col xl={12} md={24} xxl={9}>
      <b>By {title}</b>
      {description && <p>{description}</p>}
      {
        analyticsMode === AnalyticsMode.Simple &&
        <Suspense fallback={<Spin size={'large'} />}>
          <SimpleAnalytics system={system} sets={sets}
                           frequency={frequency} />
        </Suspense>
      }
      {
        analyticsMode === AnalyticsMode.Detailed &&
        <Suspense fallback={<Spin size={'large'} />}>
          <DetailedAnalytics system={system} sets={sets}
                             frequency={frequency} />
        </Suspense>
      }
    </Col>
  );
};