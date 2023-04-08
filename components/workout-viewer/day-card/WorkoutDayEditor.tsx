import {PlanDay} from '../../../types/workout';
import {Card} from 'antd';
import {RestDayImage} from './RestDayImage';
import {WorkoutDayActions} from './WorkoutDayActions';
import {WorkoutDayTitle} from './WorkoutDayTitle';
import {ExerciseList} from '../exercises/ExerciseList';
import {createContext, memo, useContext} from 'react';
import {WorkoutDayStats} from '../analytics/day/WorkoutDayStats';
import {viewerEditingModeState, ViewerMode} from '../ViewerConfigState';
import {useRecoilValue} from 'recoil';

type Props = {
  day: PlanDay
  index: number;
}

const DayIndexContext = createContext<number>(-1);

export const useDayIndexContext = () => {
  return useContext(DayIndexContext);
};

export const WorkoutDayEditor = ({day, index}: Props) => {
  const mode = useRecoilValue(viewerEditingModeState);
  console.debug('WorkoutDayEditor render', index);

  return <DayIndexContext.Provider value={index}>
    <Card
      className={'workout-day-card'}
      size={'small'}
      title={<WorkoutDayTitle day={day} />}
      extra={mode === ViewerMode.Edit && <WorkoutDayActions />}
      actions={
        'isRest' in day ?
          [] :
          [<WorkoutDayStats day={day} key={'stats'} />]
      }
    >
      {
        'isRest' in day ?
          <RestDayImage /> :
          <ExerciseList day={day} />
      }
    </Card>
  </DayIndexContext.Provider>;
};

export const MemoizedWorkoutDayEditor = memo(WorkoutDayEditor);