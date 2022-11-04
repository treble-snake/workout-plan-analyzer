import {Exercise, QtyRange} from '../../../types/workout';
import {Col, Row, Tooltip, Typography} from 'antd';
import {ExerciseControls} from './ExerciseControls';
import {RangeInput} from './RangeInput';
import {useDayIndexContext} from '../day-card/WorkoutDayEditor';
import {useWorkoutContext} from '../WorkoutProvider';
import {useViewerConfigContext, ViewerMode} from '../ViewerConfigProvider';

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
  const {mode} = useViewerConfigContext();

  const updateReps = (range: QtyRange) => {
    setReps(range, dayIndex, index, supersetIndex);
  };

  const updateSets = (range: QtyRange) => {
    setSets(range, dayIndex, index, supersetIndex);
  };

  return <Row>
    <Col span={mode === ViewerMode.Edit ? 12 : 16}
         style={{
           paddingLeft: supersetIndex !== undefined ? 0 : 6,
         }}>
      <Tooltip title={exercise.info.name}>
        <Typography.Paragraph ellipsis style={{padding: 0, margin: 0}}>
          {exercise.info.name}
        </Typography.Paragraph>
      </Tooltip>
    </Col>
    <Col span={3} style={{textAlign: 'center', border: '0px dashed black'}}>
      <RangeInput range={exercise.sets} update={updateSets} />
    </Col>
    <Col span={5} style={{textAlign: 'center', border: '0px dashed black'}}>
      <RangeInput range={exercise.reps} update={updateReps} />
    </Col>

    {
      mode === ViewerMode.Edit &&
      <Col span={4} style={{border: '0px dashed black'}}>
        <ExerciseControls index={index} supersetIndex={supersetIndex} />
      </Col>
    }
  </Row>;
};

