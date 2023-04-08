import {Superset, WorkoutDay} from '../../../types/workout';
import {Button, Tooltip} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import {useWorkoutContext} from '../WorkoutProvider';
import {useDayIndexContext} from '../day-card/WorkoutDayEditor';

type Props = {
  supersetIndex?: number;
  index: number;
}

const BUTTON_SIZE = 14;

export const ExerciseControls = ({
                                   index,
                                   supersetIndex
                                 }: Props) => {
  const {removeExercise, plan} = useWorkoutContext();
  const dayIndex = useDayIndexContext();
  const day = plan.days[dayIndex] as WorkoutDay;
  const exrQty = supersetIndex ?
    ((day.exercises[supersetIndex] as Superset).exercises.length) :
    day.exercises.length;
  return <>
    {/*{*/}
    {/*  index > 0 &&*/}
    {/*  <Button size={'small'}*/}
    {/*          disabled*/}
    {/*          icon={<ArrowUpOutlined />}*/}
    {/*          type={'link'}*/}
    {/*          style={{width: BUTTON_SIZE, height: BUTTON_SIZE}}*/}
    {/*  />*/}
    {/*}*/}

    {/*{*/}
    {/*  index < exrQty - 1 &&*/}
    {/*  <Button size={'small'}*/}
    {/*          disabled*/}
    {/*          style={{width: BUTTON_SIZE, height: BUTTON_SIZE}}*/}
    {/*          icon={<ArrowDownOutlined />}*/}
    {/*          type={'link'}*/}
    {/*  />*/}
    {/*}*/}

    <Tooltip title={'Delete'}>
      <Button size={'small'}
              danger
              type={'link'}
              style={{width: BUTTON_SIZE, height: BUTTON_SIZE}}
              icon={<CloseOutlined />}
              onClick={() => removeExercise(dayIndex, index, supersetIndex)}

      />
    </Tooltip>
  </>;
};

