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

export const PlanStatsBySystemComponent = <T extends Record<string, string>>(props: Props<T>) => {
  const {system} = props;
  const {title, description} = SystemsMeta[system];
  const analyticsMode = useRecoilValue(analyticsModeState);
  // TODO: check https://recoiljs.org/docs/api-reference/utils/noWait
  const {
    setsByMuscle,
    musclesFrequency,
    setsByMovement,
    movementsFrequency
  } = useRecoilValue(workoutTotalStatsSelector);

  console.debug('PlanStatsBySystemComponent render', system, analyticsMode);

  const sets = system === System.Muscle ? setsByMuscle : setsByMovement;
  const frequency = system === System.Muscle ? musclesFrequency : movementsFrequency;

  return (
    <Col xl={12} md={24} xxl={9}>
      <b>By {title}</b>
      {description && <p>{description}</p>}
      <Suspense fallback={<Spin size={'large'} />}>
        {
          analyticsMode === AnalyticsMode.Simple &&
          <SimpleAnalytics system={system} sets={sets}
                           frequency={frequency} />
        }
        {
          analyticsMode === AnalyticsMode.Detailed &&
          <DetailedAnalytics system={system} sets={sets}
                             frequency={frequency} />
        }
      </Suspense>
    </Col>
  );
};

export const PlanStatsBySystem = PlanStatsBySystemComponent;