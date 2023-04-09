import {Col, Row, Select} from 'antd';
import {ALL_EXERCISES, EXERCISES_BY_ID} from '../../../temp-data/exercises';
import {useDayIdContext} from '../day-card/WorkoutDayEditor';
import {groupBy, prop, sortBy} from 'ramda';
import {memo} from 'react';
import {useSetRecoilState} from 'recoil';
import {workoutDayExercisesSelector} from '../state/workout/WorkoutPlanState';

const BY_MUSCLE_GROUP = Object.entries(
  groupBy(prop('muscleGroup'), sortBy(prop('muscleGroup'), ALL_EXERCISES))
)
  .map(([key, value]) => {
    return {
      label: key,
      options: value.map(it => ({
        value: it.id,
        label: it.name
      }))
    };
  });

const DEFAULT_SETS = {from: 2, to: 3};
const DEFAULT_REPS = {from: 10, to: 12};

export const NewExerciseRowComponent = () => {
  console.debug('NewExerciseRow render');
  const dayId = useDayIdContext();
  const setExercises = useSetRecoilState(workoutDayExercisesSelector(dayId));
  const addExercise = (exerciseId: string) => {
    setExercises((currentList) => {
      return currentList.concat({
        info: EXERCISES_BY_ID[exerciseId],
        sets: DEFAULT_SETS,
        reps: DEFAULT_REPS
      });
    });
  };

  return (
    <Row style={{marginTop: 8}}>
      <Col span={12}>
        <Select
          showSearch
          allowClear
          placeholder={'Add exercise'}
          options={BY_MUSCLE_GROUP}
          value={null}
          onChange={addExercise}
          bordered={false}
          style={{width: '100%'}}
          dropdownMatchSelectWidth={false}
          filterOption={(value, option) =>
            !!option?.label?.toLowerCase()?.includes(value.toLowerCase())
          }
          size={'small'}
        />
      </Col>
    </Row>
  );
};

export const NewExerciseRow = memo(NewExerciseRowComponent);