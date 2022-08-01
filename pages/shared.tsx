import type {NextPage} from 'next';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {WorkoutProvider} from '../components/workout-viewer/WorkoutProvider';
import {
  PlanAnalytics
} from '../components/workout-viewer/analytics/plan/PlanAnalytics';
import {useEffect, useState} from 'react';
import {GlobalLoading} from '../common/GlobalLoading';
import {fromBase64} from '../components/workout-viewer/WorkoutUtils';
import {WorkoutPlan} from '../types/workout';
import {Alert} from 'antd';

const SharedPlan: NextPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);

  useEffect(() => {
    // TODO: use query instead of hash ?
    if (window.location.hash.length > 1) {
      try {
        setPlan(fromBase64(window.location.hash.substring(1)));
      } catch (e) {
        console.error('Failed to parse shared plan', e);
        setError('Failed to read shared plan data');
      }
    } else if (!plan) {
      setError('No shared plan data found');
    }
    setLoading(false);
  }, []);

  if (isLoading) {
    return <GlobalLoading enabled={isLoading} />;
  }

  if (error || !plan) {
    return <Alert type={'error'} banner description={
      error || 'Something went wrong'
    } />;
  }

  return (
    <WorkoutProvider plan={plan}>
      <WorkoutEditor />
      <PlanAnalytics />
    </WorkoutProvider>
  );
};

export default SharedPlan;
