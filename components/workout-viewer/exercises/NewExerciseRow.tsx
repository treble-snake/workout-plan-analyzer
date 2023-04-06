import {Col, Row, Select} from 'antd';
import {ALL_EXERCISES} from '../../../temp-data/exercises';
import {useWorkoutContext} from '../WorkoutProvider';
import {useDayIndexContext} from '../day-card/WorkoutDayEditor';
import {groupBy, prop, sortBy} from 'ramda';

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

export const NewExerciseRow = () => {
  const {addExercise} = useWorkoutContext();
  const dayIndex = useDayIndexContext();

  const apply = (exerciseId: string) => {
    addExercise(dayIndex, exerciseId, DEFAULT_SETS, DEFAULT_REPS);
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
          onChange={apply}
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