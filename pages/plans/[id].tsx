import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {WorkoutProvider} from '../../components/workout-viewer/WorkoutProvider';
import {WorkoutEditor} from '../../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../../components/workout-viewer/analytics/plan/PlanAnalytics';
import {useEffect, useState} from 'react';
import {PlanStorage} from '../../api-lib';
import {normalizePlan} from '../../components/workout-viewer/WorkoutUtils';
import {WorkoutPlan} from '../../types/workout';
import {GlobalLoading} from '../../common/GlobalLoading';
import {Alert} from 'antd';

const PlanById: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [error, setError] = useState<string | null | object>(null);
  const {query} = useRouter();
  const id = String(query.id);

  useEffect(() => {
    setLoading(true);
    console.debug(`Loading plan ${id}`);
    PlanStorage.getPlan(id)
      .then((planData) => {
        if (planData) {
          setPlan(normalizePlan(planData));
        }
      })
      .catch(error => {
        console.error(error);
        setError(error)
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !query.id) {
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
    return <Alert type={'error'} banner description={text} />;
  }

  return (
    <WorkoutProvider plan={plan}>
      <WorkoutEditor />
      <PlanAnalytics />
    </WorkoutProvider>
  );
};

export default PlanById;