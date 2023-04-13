import {Card} from 'antd';
import {RestDayImage} from './RestDayImage';
import {WorkoutDayTitle} from './WorkoutDayTitle';
import {ExerciseEditorList} from '../exercises/ExerciseEditorList';
import {createContext, memo, useContext} from 'react';
import {WorkoutDayStats} from '../analytics/day/WorkoutDayStats';
import {viewerEditingModeState, ViewerMode} from '../state/ViewerConfigState';
import {useRecoilValue} from 'recoil';
import {WorkoutDayActions} from './WorkoutDayActions';
import {workoutDayById} from '../state/workout/WorkoutPlanState';

type Props = {
  id: string;
  index: number;
}

const DayIdContext = createContext<string>('');

export const useDayIdContext = () => {
  return useContext(DayIdContext);
};

export const WorkoutDayEditorComponent = ({index, id}: Props) => {
  const mode = useRecoilValue(viewerEditingModeState);
  const day = useRecoilValue(workoutDayById(id));

  return <DayIdContext.Provider value={id}>
      <Card
        className={'workout-day-card'}
        size={'small'}
        title={<WorkoutDayTitle title={day.title} id={id}
                                isRest={'isRest' in day} />}
        extra={mode === ViewerMode.Edit && <WorkoutDayActions index={index} />}
        actions={
          'isRest' in day ?
            [] :
            [<WorkoutDayStats key={'stats'} />]
        }
      >
        {
          'isRest' in day ?
            <RestDayImage /> :
            <ExerciseEditorList exercises={day.exercises} />
        }
      </Card>
    </DayIdContext.Provider>;
};

export const WorkoutDayEditor = memo(WorkoutDayEditorComponent);