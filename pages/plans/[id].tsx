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
import {useEffect, useState} from 'react';
import {denormalizePlan} from '../../components/workout-viewer/WorkoutUtils';

const PlanById: NextPage = () => {
  const {query, isReady} = useRouter();
  const id = String(query.id);
  const {plan, error, isLoading} = usePlan(id);
  const setWorkout = useSetRecoilState(workoutPlanState);
  // TODO: maybe make plan nullable in the state?
  const [planIsReady, setPlanIsReady] = useState(false);

  useEffect(() => {
    if (plan) {
      setWorkout(denormalizePlan(plan));
      setPlanIsReady(true);
    }
  }, [setWorkout, plan]);

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

  if (isLoading || !isReady || !planIsReady) {
    return <GlobalLoading />;
  }

  return (<>
      <WorkoutEditor />
      <PlanAnalytics />
    </>
  );
};

export default PlanById;