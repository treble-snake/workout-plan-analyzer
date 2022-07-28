import type {NextPage} from 'next';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {LocalStorageApi} from '../api-lib/LocalStorageApi';
import {Button, message, PageHeader} from 'antd';
import {WorkoutPlan} from '../types/workout';
import {PlusCircleOutlined} from '@ant-design/icons';
import {WorkoutPlanList} from '../components/workout-list/WorkoutPlanList';

const Home: NextPage = () => {
  const [plans, setPlans] = useState<WorkoutPlan[]>([]);
  useEffect(() => {
    LocalStorageApi.listPlans()
      .then((storedPlans) => {
        setPlans(storedPlans);
      })
      .catch(() => message.error('Load failed'));
  }, []);
  return (
    <>
      {/*<Typography.Title>Workout Plans</Typography.Title>*/}
      <PageHeader title={'Workout Plans'}
                  subTitle={<Link href={'/new-plan'}>
                    <Button icon={<PlusCircleOutlined />} type={'primary'}>
                      New plan
                    </Button>
                  </Link>}
      />
      <WorkoutPlanList plans={plans} />
    </>
  );
};

export default Home;
