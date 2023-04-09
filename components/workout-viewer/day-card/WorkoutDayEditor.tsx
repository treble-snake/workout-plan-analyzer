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

const DayIndexContext = createContext<number>(-1);
const DayIdContext = createContext<string>('');

export const useDayIndexContext = () => {
  return useContext(DayIndexContext);
};

export const useDayIdContext = () => {
  return useContext(DayIdContext);
};

export const WorkoutDayEditorComponent = ({index, id}: Props) => {
  const mode = useRecoilValue(viewerEditingModeState);
  const day = useRecoilValue(workoutDayById(id));
  console.debug('Workout Day Editor render', index, id, day.title);

  return <DayIndexContext.Provider value={index}>
    <DayIdContext.Provider value={id}>
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
    </DayIdContext.Provider>
  </DayIndexContext.Provider>;
};

export const WorkoutDayEditor = memo(WorkoutDayEditorComponent);