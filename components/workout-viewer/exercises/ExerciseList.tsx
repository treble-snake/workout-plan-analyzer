import {WorkoutDay} from '../../../types/workout';
import {
  ExerciseListItem
} from './ExerciseListItem';
import {SupersetListItem} from './SupersetListItem';
import {Col, Empty, Row} from 'antd';

type Props = {
  day: WorkoutDay;
}

export const ExerciseList = ({day}: Props) => {
  if (day.exercises.length === 0) {
    return <Empty description={'Add first exercise'} />;
  }

  return <>
    <Row>
      <Col span={3} offset={12} style={{textAlign: 'center'}}>Sets</Col>
      <Col span={5} style={{textAlign: 'center'}}>Reps</Col>
    </Row>
    {
      day.exercises.map((it, i) => {
        return ('exercises' in it) ?
          <SupersetListItem superset={it} key={i} index={i} /> :
          <ExerciseListItem exercise={it} key={i} index={i} />;
      })
    }
  </>;
};