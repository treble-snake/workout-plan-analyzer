import {PlusCircleOutlined} from '@ant-design/icons';
import {Button, Card} from 'antd';
import {PlanDay} from '../../../types/workout';
import {useSetRecoilState} from 'recoil';
import {workoutPlanDaysSelector} from '../state/workout/WorkoutPlanState';
import {memo} from 'react';
import {makeNewDay} from '../WorkoutUtils';

const addDayToList = (days: PlanDay[], isRest: boolean) => {
  return [
    ...days,
    makeNewDay(isRest),
  ] as PlanDay[];
};

export const AddDaysComponent = () => {
  const setDays = useSetRecoilState(workoutPlanDaysSelector);
  const addDay = (isRest: boolean) =>
    setDays((currentDays) => addDayToList(currentDays, isRest));

  // TODO: Card is duplicate
  return <Card title={'New bright day!'}
               style={{textAlign: 'center'}}>
    <Button
      icon={<PlusCircleOutlined />}
      style={{marginBottom: 15}}
      type={'primary'} onClick={() => addDay(false)}>Add workout</Button>
    <Button
      icon={<PlusCircleOutlined />}
      onClick={() => addDay(true)}>Add rest day</Button>
  </Card>;
};

export const AddDays = memo(AddDaysComponent);