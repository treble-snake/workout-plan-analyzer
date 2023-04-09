import {ExerciseList} from '../../../types/workout';
import {ExerciseListItem} from './ExerciseListItem';
import {Col, Empty, Row} from 'antd';
import {viewerEditingModeState, ViewerMode} from '../state/ViewerConfigState';
import {NewExerciseRow} from './NewExerciseRow';
import {useRecoilValue} from 'recoil';
import {memo} from 'react';

type Props = {
  exercises: ExerciseList;
}

export const ExerciseEditorListComponent = ({exercises}: Props) => {
  const mode = useRecoilValue(viewerEditingModeState);
  console.debug('Exercise Editor List render');

  const tableHeader = <Row>
    <Col span={3} offset={mode === ViewerMode.Edit ? 12 : 16}
         style={{textAlign: 'center'}}>Sets</Col>
    <Col span={5} style={{textAlign: 'center'}}>Reps</Col>
  </Row>;

  if (exercises.length === 0) {
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
      exercises.map((it, i) => {
        return <ExerciseListItem exercise={it} key={i} index={i} />;
      })
    }
    {
      mode === ViewerMode.Edit && <NewExerciseRow />
    }
  </>;
};

export const ExerciseEditorList = memo(ExerciseEditorListComponent);