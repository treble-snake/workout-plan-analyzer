import {PlanDay} from '../../../types/workout';
import {Card, Collapse} from 'antd';
import {AddDays} from './AddDays';
import {RestDayImage} from './RestDayImage';
import {WorkoutDayActions} from './WorkoutDayActions';
import {WorkoutDayTitle} from './WorkoutDayTitle';
import {ExerciseList} from '../exercises/ExerciseList';
import {createContext, useContext} from 'react';
import {WorkoutDayStats} from '../analytics/WorkoutDayStats';

type Props = {
  day: PlanDay
  index: number;
}

const DayIndexContext = createContext<number>(-1);

export const useDayIndexContext = () => {
  return useContext(DayIndexContext);
};

export const WorkoutDayEditor = ({day, index}: Props) => {
  return <DayIndexContext.Provider value={index}>
    <Card
      className={'workout-day-card'}
      size={'small'}
      title={<WorkoutDayTitle day={day} />}
      extra={<WorkoutDayActions />}
      actions={
        'isRest' in day ?
          [] :
          [<WorkoutDayStats day={day} key={'1'} />]
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