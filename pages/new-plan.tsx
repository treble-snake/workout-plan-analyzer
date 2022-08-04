import type {NextPage} from 'next';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {WorkoutProvider} from '../components/workout-viewer/WorkoutProvider';
import {
  PlanAnalytics
} from '../components/workout-viewer/analytics/plan/PlanAnalytics';
import {
  ViewerConfigProvider
} from '../components/workout-viewer/ViewerConfigProvider';
import {useEffect, useState} from 'react';
import {PlanStorage} from '../api-lib';
import {WorkoutPlan} from '../types/workout';
import {GlobalLoading} from '../common/GlobalLoading';
import {Alert} from 'antd';

const EMPTY_PLAN: WorkoutPlan = Object.freeze({
  id: '',
  isDraft: true,
  title: 'My New Awesome Plan',
  shortDescription: 'Short description',
  fullDescription: 'Full description',
  days: [
    {
      title: 'First day',
      exercises: []
    }
  ]
});

const NewPlan: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState<WorkoutPlan | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    PlanStorage.loadDraft()
      .then((draft) => setDraft(draft))
      .catch(error => {
        console.error(error);
        setError(error)
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <GlobalLoading />;
  }

  if (error || !draft) {
    return <Alert type={'error'} banner description={'Something went wrong'} />;
  }

  return (
    <WorkoutProvider plan={draft}>
      <WorkoutEditor />
      <PlanAnalytics />
    </WorkoutProvider>
  );
};

export default NewPlan;