import {QtyRange} from '../../../../types/workout';
import {Col} from 'antd';
import {System} from '../systems-data/SystemsCommon';
import {
  AnalyticsMode,
  useViewerConfigContext
} from '../../ViewerConfigProvider';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import {SimpleAnalytics} from './simple/SimpleAnalytics';
import {DetailedAnalytics} from './detailed/DetailedAnalytics';
import {GradedSets} from './types';

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
        <SimpleAnalytics system={system} sets={sets} frequency={frequency} />
      }
      {
        analyticsMode === AnalyticsMode.Detailed &&
        <DetailedAnalytics system={system} sets={sets} frequency={frequency} />
      }
    </Col>
  );
};