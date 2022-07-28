import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {
  ViewerConfigProvider
} from '../../components/workout-viewer/ViewerConfigProvider';
import {WorkoutProvider} from '../../components/workout-viewer/WorkoutProvider';
import {WorkoutEditor} from '../../components/workout-viewer/WorkoutEditor';
import {
  PlanAnalytics
} from '../../components/workout-viewer/analytics/plan/PlanAnalytics';

const PlanById: NextPage = () => {
  const {query} = useRouter();
  return (
    <ViewerConfigProvider>
      <WorkoutProvider id={query.id ? String(query.id) : undefined}>
        <WorkoutEditor />
        <PlanAnalytics />
      </WorkoutProvider>
    </ViewerConfigProvider>
  );
};

export default PlanById;
