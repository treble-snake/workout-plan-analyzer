import type {NextPage} from 'next';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {WorkoutProvider} from '../components/workout-viewer/WorkoutProvider';
import {
  PlanAnalytics
} from '../components/workout-viewer/analytics/plan/PlanAnalytics';
import {
  ViewerConfigProvider
} from '../components/workout-viewer/ViewerConfigProvider';

const NewPlan: NextPage = () => {
  return (
    <ViewerConfigProvider>
      <WorkoutProvider>
        <WorkoutEditor />
        <PlanAnalytics />
      </WorkoutProvider>
    </ViewerConfigProvider>
  );
};

export default NewPlan;
