import {WorkoutDay} from '../../../types/workout';
import {ExerciseListItem} from './ExerciseListItem';
import {SupersetListItem} from './SupersetListItem';
import {Col, Empty, Row} from 'antd';
import {useViewerConfigContext, ViewerMode} from '../ViewerConfigProvider';
import {NewExerciseRow} from './NewExerciseRow';

type Props = {
  day: WorkoutDay;
}

export const ExerciseList = ({day}: Props) => {
  const {mode} = useViewerConfigContext();

  const tableHeader = <Row>
    <Col span={3} offset={mode === ViewerMode.Edit ? 12 : 16}
         style={{textAlign: 'center'}}>Sets</Col>
    <Col span={5} style={{textAlign: 'center'}}>Reps</Col>
  </Row>;

  if (day.exercises.length === 0) {
    return mode === ViewerMode.Edit ?
      <>
        {tableHeader}
        <NewExerciseRow />
      </> :
      <Empty description={'Nothing here yet'} />;
  }

  return <>
    {tableHeader}
    {
      day.exercises.map((it, i) => {
        return ('exercises' in it) ?
          <SupersetListItem superset={it} key={i} index={i} /> :
          <ExerciseListItem exercise={it} key={i} index={i} />;
      })
    }
    {
      mode === ViewerMode.Edit && <NewExerciseRow />
    }
  </>;
};