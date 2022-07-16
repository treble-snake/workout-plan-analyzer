import {PlusCircleOutlined} from '@ant-design/icons';
import {Button, Card} from 'antd';
import {useWorkoutContext} from '../WorkoutProvider';

export const AddDays = () => {
  const {addDay} = useWorkoutContext();
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