import type {NextPage} from 'next';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../components/workout-viewer/analytics/plan/PlanAnalytics';
import {useEffect} from 'react';
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

  useEffect(() => {
    if (draft) {
      setWorkout(denormalizePlan(draft));
    }
  }, [setWorkout, draft]);

  if (isLoading) {
    return <GlobalLoading />;
  }

  if (error) {
    return <ErrorMessage text={'Something went wrong, sorry :('} />;
  }

  return (
    <>
      <WorkoutEditor />
      <PlanAnalytics />
    </>
  );
};

export default NewPlan;
