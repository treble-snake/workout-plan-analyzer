import {Button, Popconfirm, Tooltip} from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DeleteFilled,
  QuestionCircleOutlined
} from '@ant-design/icons';
import {useWorkoutContext} from '../WorkoutProvider';
import {useDayIndexContext} from './WorkoutDayEditor';

export const WorkoutDayActions = () => {
  const {plan, removeDay, moveDay} = useWorkoutContext();
  const dayIndex = useDayIndexContext();

  return <>
    {
      dayIndex !== 0 &&
      <Tooltip title={'Move left'}>
        <Button icon={<ArrowLeftOutlined />}
                size={'small'}
                type={'link'}
                onClick={() => moveDay(dayIndex, dayIndex - 1)}
        />
      </Tooltip>
    }

    <Tooltip title={'Delete'}>
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                  icon={<QuestionCircleOutlined style={{color: 'red'}} />}
                  onConfirm={() => removeDay(dayIndex)}
      >
        <Button icon={<DeleteFilled />}
                size={'small'}
                shape={'circle'}
                danger />
      </Popconfirm>
    </Tooltip>

    {
      dayIndex !== plan.days.length - 1 &&
      <Tooltip title={'Move right'}>
        <Button icon={<ArrowRightOutlined />}
                size={'small'}
                type={'link'}
                onClick={() => moveDay(dayIndex, dayIndex + 1)}
        />
      </Tooltip>
    }
  </>;
};