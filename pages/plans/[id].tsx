import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {WorkoutProvider} from '../../components/workout-viewer/WorkoutProvider';
import {WorkoutEditor} from '../../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../../components/workout-viewer/analytics/plan/PlanAnalytics';
import {GlobalLoading} from '../../common/GlobalLoading';
import {usePlan} from '../../api-lib/hooks/usePlan';
import {ErrorMessage} from '../../common/ErrorMessage';

const PlanById: NextPage = () => {
  const {query, isReady} = useRouter();
  const id = String(query.id);
  const {plan, error, isLoading} = usePlan(id);

  if (isLoading || !isReady) {
    return <GlobalLoading />;
  }

  if (error || !plan) {
    let text = 'Something went wrong.';
    if (!plan) {
      text += ' Plan not found.';
    }
    if (error) {
      text += ` (${String(error)})`;
    }
    return <ErrorMessage text={text} />;
  }

  return (
    <WorkoutProvider plan={plan}>
      <WorkoutEditor />
      <PlanAnalytics />
    </WorkoutProvider>
  );
};

export default PlanById;