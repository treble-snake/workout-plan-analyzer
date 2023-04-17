import type {NextPage} from 'next';
import {PageHeader} from '@ant-design/pro-layout';
import {WorkoutPlanList} from '../components/workout-list/WorkoutPlanList';
import {NewPlanButton} from '../components/workout-list/NewPlanButton';
import {Typography} from 'antd';

const Home: NextPage = () => {
  return <>
    <PageHeader title={
      <Typography.Title level={3} style={{margin: 0}}>
        Workout Plans
      </Typography.Title>
    } subTitle={<NewPlanButton />} />
    <WorkoutPlanList />
  </>;
};

export default Home;
