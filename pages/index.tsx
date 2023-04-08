import type {NextPage} from 'next';
import {PageHeader} from '@ant-design/pro-layout';
import {WorkoutPlanList} from '../components/workout-list/WorkoutPlanList';
import {NewPlanButton} from '../components/workout-list/NewPlanButton';

const Home: NextPage = () => {
  return <>
    <PageHeader title={'Workout Plans'} subTitle={<NewPlanButton />} />
    <WorkoutPlanList />
  </>;
};

export default Home;
