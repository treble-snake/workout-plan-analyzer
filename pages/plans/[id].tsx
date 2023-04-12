import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {WorkoutEditor} from '../../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../../components/workout-viewer/analytics/plan/PlanAnalytics';
import {GlobalLoading} from '../../common/GlobalLoading';
import {usePlan} from '../../api-lib/hooks/usePlan';
import {ErrorMessage} from '../../common/ErrorMessage';
import {useSetRecoilState} from 'recoil';
import {
  workoutPlanState
} from '../../components/workout-viewer/state/workout/WorkoutPlanState';
import {useEffect} from 'react';
import {denormalizePlan} from '../../components/workout-viewer/WorkoutUtils';

const PlanById: NextPage = () => {
  console.debug('render PlanById');

  const {query, isReady} = useRouter();
  const id = String(query.id);
  const {plan, error, isLoading} = usePlan(id);
  const setWorkout = useSetRecoilState(workoutPlanState);

  useEffect(() => {
    console.debug('PlanById useEffect');
    if (plan) {
      setWorkout(denormalizePlan(plan));
    }
  }, [setWorkout, plan]);

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

  return (<>
      <WorkoutEditor />
      <PlanAnalytics />
    </>
  );
};

export default PlanById;