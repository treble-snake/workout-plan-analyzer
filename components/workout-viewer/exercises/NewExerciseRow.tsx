import {Button, Col, Row, Select} from 'antd';
import {RangeInput} from './RangeInput';
import {CheckOutlined} from '@ant-design/icons';
import {useState} from 'react';
import {ALL_EXERCISES} from '../../../temp-data/exercises';
import {useWorkoutContext} from '../WorkoutProvider';
import {isValidRange} from './RangeUtils';
import {useDayIndexContext} from '../day-card/WorkoutDayEditor';

const options = ALL_EXERCISES.map((it) => ({
  value: it.id,
  label: it.name
}));

const DEFAULT_SETS = {from: 2, to: 3};
const DEFAULT_REPS = {from: 10, to: 12};

export const NewExerciseRow = () => {
  const {addExercise} = useWorkoutContext();
  const dayIndex = useDayIndexContext();
  const [exercise, setExercise] = useState<string | null>(null);
  const [sets, setSets] = useState(DEFAULT_SETS);
  const [reps, setReps] = useState(DEFAULT_REPS);

  const isValid = () => exercise && isValidRange(sets) && isValidRange(reps);

  const apply = () => {
    // TODO: validate more?
    if (!isValid()) {
      return;
    }

    addExercise(dayIndex, exercise!, sets, reps);
    setExercise(null);
    setSets(DEFAULT_SETS);
    setReps(DEFAULT_REPS);
  };

  return (
    <Row>
      <Col span={12}>
        <Select
          showSearch
          allowClear
          placeholder={'Add exercise'}
          options={options}
          value={exercise}
          onChange={setExercise}
          bordered={false}
          style={{width: '100%'}}
          dropdownMatchSelectWidth={false}
          filterOption={(value, option) =>
            !!option?.label?.toLowerCase()?.includes(value.toLowerCase())
          }
          size={'small'}
        />
      </Col>
      <Col span={3} style={{textAlign: 'center', border: '0px dashed black'}}>
        <RangeInput range={sets} update={setSets} />
      </Col>
      <Col span={5} style={{textAlign: 'center', border: '0px dashed black'}}>
        <RangeInput range={reps} update={setReps} />
      </Col>
      <Col span={4} style={{border: '0px dashed black'}}>
        <Button icon={<CheckOutlined />} size={'small'} type={'link'}
                disabled={!isValid()}
                onClick={apply} />
      </Col>
    </Row>
  );
};