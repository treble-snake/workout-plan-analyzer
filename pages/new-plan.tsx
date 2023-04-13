import type {NextPage} from 'next';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../components/workout-viewer/analytics/plan/PlanAnalytics';
import {useEffect, useState} from 'react';
import {GlobalLoading} from '../common/GlobalLoading';
import {ErrorMessage} from '../common/ErrorMessage';
import {useSetRecoilState} from 'recoil';
import {
  workoutPlanState
} from '../components/workout-viewer/state/workout/WorkoutPlanState';
import {useDraft} from '../api-lib/hooks/useDraft';
import {denormalizePlan} from '../components/workout-viewer/WorkoutUtils';

const NewPlan: NextPage = () => {
  const setWorkout = useSetRecoilState(workoutPlanState);
  const {draft, error, isLoading} = useDraft();
  const [planIsReady, setPlanIsReady] = useState(false );

  useEffect(() => {
    if (draft) {
      setWorkout(denormalizePlan(draft));
      setPlanIsReady(true);
    }
  }, [setWorkout, draft]);

  if (error) {
    return <ErrorMessage text={'Something went wrong, sorry :('} />;
  }

  if (isLoading || !planIsReady) {
    return <GlobalLoading />;
  }

  return (
    <>
      <WorkoutEditor />
      <PlanAnalytics />
    </>
  );
};

export default NewPlan;
