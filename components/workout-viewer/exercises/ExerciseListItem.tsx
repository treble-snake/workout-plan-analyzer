import {Exercise, Range} from '../../../types/workout';
import {Col, Row} from 'antd';
import {ExerciseControls} from './ExerciseControls';

export const RangeSpan = ({range}: { range: Range }) => {
  if (range.from === range.to) {
    return <>{range.from}</>;
  }

  return <>{range.from}-{range.to}</>;
};

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
  return <Row style={{paddingLeft: supersetIndex !== undefined ? 0 : 6}}>
    <Col span={12}
         style={{border: '0px dashed black'}}>{exercise.info.name}</Col>
    <Col span={3} style={{border: '0px dashed black'}}>
      <RangeSpan range={exercise.sets} />
    </Col>
    <Col span={5} style={{border: '0px dashed black'}}>
      x<RangeSpan range={exercise.reps} />
    </Col>
    <Col span={4} style={{border: '0px dashed black'}}>
      <ExerciseControls index={index} supersetIndex={supersetIndex} />
    </Col>
  </Row>;
};

