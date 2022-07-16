import {Exercise, QtyRange} from '../../../types/workout';
import {Col, Row} from 'antd';
import {ExerciseControls} from './ExerciseControls';
import {RangeInput} from './RangeInput';
import {useDayIndexContext} from '../day-card/WorkoutDayEditor';
import {useWorkoutContext} from '../WorkoutProvider';

type Props = {
  exercise: Exercise;
  supersetIndex?: number;
  index: number;
}

export const ExerciseListItem = ({
                                   exercise,
                                   index,
                                   supersetIndex
                                 }: Props) => {
  const dayIndex = useDayIndexContext();
  const {setReps, setSets} = useWorkoutContext();

  const updateReps = (range: QtyRange) => {
    setReps(range, dayIndex, index, supersetIndex);
  }

  const updateSets = (range: QtyRange) => {
    setSets(range, dayIndex, index, supersetIndex);
  }

  return <Row>
    <Col span={12}
         style={{
           paddingLeft: supersetIndex !== undefined ? 0 : 6,
           border: '0px dashed black'
         }}>{exercise.info.name}</Col>
    <Col span={3} style={{textAlign: 'center', border: '0px dashed black'}}>
      <RangeInput range={exercise.sets} update={updateSets} />
    </Col>
    <Col span={5} style={{textAlign: 'center', border: '0px dashed black'}}>
      <RangeInput range={exercise.reps} update={updateReps} />
    </Col>
    <Col span={4} style={{border: '0px dashed black'}}>
      <ExerciseControls index={index} supersetIndex={supersetIndex} />
    </Col>
  </Row>;
}

