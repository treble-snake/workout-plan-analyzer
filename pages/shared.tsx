import type {NextPage} from 'next';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../components/workout-viewer/analytics/plan/PlanAnalytics';
import {useEffect, useState} from 'react';
import {GlobalLoading} from '../common/GlobalLoading';
import {
  denormalizePlan,
  fromBase64
} from '../components/workout-viewer/WorkoutUtils';
import {WorkoutPlan} from '../types/workout';
import {ErrorMessage} from '../common/ErrorMessage';
import {useSetRecoilState} from 'recoil';
import {
  workoutPlanState
} from '../components/workout-viewer/state/workout/WorkoutPlanState';

const SharedPlan: NextPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const setWorkout = useSetRecoilState(workoutPlanState);
  const [planIsReady, setPlanIsReady] = useState(false);

  useEffect(() => {
    setLoading(true);
    // TODO: use query instead of hash ?
    if (window.location.hash.length > 1) {
      try {
        const plan: WorkoutPlan = {
          ...fromBase64(window.location.hash.substring(1)),
          isDemo: false,
          isDraft: false,
          isShared: true,
          id: ''
        };
        setWorkout(denormalizePlan(plan));
        setPlanIsReady(true);
      } catch (e) {
        console.error('Failed to parse shared plan', e);
        setError('Failed to read shared plan data');
      }
    } else {
      setError('No shared plan data found');
    }
    setLoading(false);
  }, []);

  if (error) {
    return <ErrorMessage text={error || 'Something went wrong'} />;
  }

  if (isLoading || !planIsReady) {
    return <GlobalLoading enabled={isLoading} />;
  }

  return (
    <>
      <WorkoutEditor />
      <PlanAnalytics />
    </>
  );
};

export default SharedPlan;
