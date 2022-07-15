import {PlanDay} from '../../../types/workout';
import {Card} from 'antd';
import {AddDays} from './AddDays';
import {RestDayImage} from './RestDayImage';
import {WorkoutDayActions} from './WorkoutDayActions';
import {WorkoutDayTitle} from './WorkoutDayTitle';
import {ExerciseList} from '../exercises/ExerciseList';
import {createContext, useContext} from 'react';

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
      size={'small'}
      title={<WorkoutDayTitle day={day} />}
      extra={<WorkoutDayActions />}
    >
      {
        'isRest' in day ?
          <RestDayImage /> :
          <ExerciseList day={day} />
      }
    </Card>
  </DayIndexContext.Provider>;
};