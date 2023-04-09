import {Button, Col, Tooltip} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import {useDayIdContext} from '../day-card/WorkoutDayEditor';
import {useSetRecoilState} from 'recoil';
import {workoutDayExercisesSelector} from '../state/workout/WorkoutPlanState';
import {memo} from 'react';
import {remove} from 'ramda';

type Props = {
  index: number;
}

const BUTTON_SIZE = 14;

export const ExerciseControlsComponent = ({
                                            index,
                                          }: Props) => {
  console.debug('Exercise Controls render');
  const dayId = useDayIdContext();
  const setExercises = useSetRecoilState(workoutDayExercisesSelector(dayId));
  const removeExercise = () => {
    setExercises((currentList) => {
      return remove(index, 1, currentList);
    });
  };

  return <Col span={2}>
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
              onClick={removeExercise}

      />
    </Tooltip>
  </Col>;
};

export const ExerciseControls = memo(ExerciseControlsComponent);