import {Alert, Row} from 'antd';
import {usePlanList} from '../../api-lib/hooks/usePlanList';
import {GlobalLoading} from '../../common/GlobalLoading';
import {EmptyPlansList} from './EmptyPlansList';
import {WorkoutPlanItem} from './WorkoutPlanItem';
import {ErrorMessage} from '../../common/ErrorMessage';

export const WorkoutPlanList = () => {
    const {plans, error, isLoading} = usePlanList();
    if (isLoading) {
      return <GlobalLoading />;
    }

    if (error) {
      return <ErrorMessage text={'Error loading plans'} />;
    }

    if (!plans || plans.length === 0) {
      return <EmptyPlansList />;
    }

    return (
      <Row gutter={16}>
        {plans.map((it) => {
          return <WorkoutPlanItem plan={it} key={it.id} />;
        })}
      </Row>
    );
  }
;