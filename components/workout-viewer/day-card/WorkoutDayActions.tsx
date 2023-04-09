import {Button, Popconfirm, Tooltip} from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DeleteFilled,
  QuestionCircleOutlined
} from '@ant-design/icons';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  workoutPlanDaysSelector,
  workoutPlanLengthSelector
} from '../state/workout/WorkoutPlanState';
import {move, remove} from 'ramda';

type Props = {
  index: number;
}

export const WorkoutDayActions = ({index}: Props) => {
  const planLength = useRecoilValue(workoutPlanLengthSelector);
  const setDays = useSetRecoilState(workoutPlanDaysSelector);

  const removeDay = () => setDays((days) => remove(index, 1, days));
  const moveDay = (shift: number) =>
    setDays((days) => move(index, index + shift, days));

  return <>
    {
      index !== 0 &&
      <Tooltip title={'Move left'}>
        <Button icon={<ArrowLeftOutlined />}
                size={'small'}
                type={'link'}
                onClick={() => moveDay(-1)}
        />
      </Tooltip>
    }

    <Tooltip title={'Delete'}>
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                  icon={<QuestionCircleOutlined style={{color: 'red'}} />}
                  onConfirm={removeDay}
      >
        <Button icon={<DeleteFilled />}
                size={'small'}
                shape={'circle'}
                danger />
      </Popconfirm>
    </Tooltip>

    {
      index !== planLength - 1 &&
      <Tooltip title={'Move right'}>
        <Button icon={<ArrowRightOutlined />}
                size={'small'}
                type={'link'}
                onClick={() => moveDay(1)}
        />
      </Tooltip>
    }
  </>;
};