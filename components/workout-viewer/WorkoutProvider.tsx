import {createContext, useContext, useState} from 'react';
import {Superset, WorkoutDay, WorkoutPlan} from '../../types/workout';
import {DempoProgram} from '../DemoProgram.tmp.const';
import {move, remove} from 'ramda';

interface WorkoutContainer {
  plan: WorkoutPlan,

  addDay(isRest: boolean): void;

  removeDay(index: number): void;

  moveDay(from: number, to: number): void;

  setDayMetadata(
    index: number,
    data: Partial<Pick<WorkoutDay, 'title' | 'description'>>
  ): void;

  removeExercise(dayIndex: number, exerciseIndex: number, supersetIndex?: number): void;
}

const WorkoutContext = createContext<WorkoutContainer | null>(null);

export const useWorkoutContext = () => {
  return useContext(WorkoutContext)!;
};

export const WorkoutProvider = ({children}: any) => {
  const [plan, setPlan] = useState(DempoProgram);

  const setDays = (days: WorkoutPlan['days']) =>
    setPlan({...plan, days});

  const addDay = (isRest: boolean) => {
    setDays([...plan.days, isRest ? {isRest} : {exercises: []}]);
  };

  const removeDay = (i: number) => {
    setDays(remove(i, 1, plan.days));
  };

  const moveDay = (from: number, to: number) => {
    setDays(move(from, to, plan.days));
  };

  const setDayMetadata = (index: number,
                          data: Partial<Pick<WorkoutDay, 'title' | 'description'>>
  ) => {
    const newDays = [...plan.days];
    newDays[index] = {...newDays[index], ...data};
    setDays(newDays);
  };

  const removeExercise = (dayIndex: number, exerciseIndex: number, supersetIndex?: number) => {
    let newDays = [...plan.days];
    const day = plan.days[dayIndex] as WorkoutDay;

    if (supersetIndex === undefined) {
      newDays[dayIndex] = {
        ...newDays[dayIndex],
        exercises: remove(exerciseIndex, 1, day.exercises)
      };
      setDays(newDays);
      return;
    }

    const oldSuperset = day.exercises[supersetIndex] as Superset;
    if (oldSuperset.exercises.length === 1) {
      newDays[dayIndex] = {
        ...newDays[dayIndex],
        exercises: remove(supersetIndex, 1, day.exercises)
      };
      setDays(newDays);
      return;
    }

    const newSuperset = {
      ...oldSuperset,
      exercises: remove(exerciseIndex, 1, oldSuperset.exercises),
    } as Superset;

    const newDay = {...day};
    newDay.exercises[supersetIndex] = newSuperset;
    newDays[dayIndex] = newDay;
    setDays(newDays);
  };

  return <WorkoutContext.Provider value={{
    plan,
    addDay,
    removeDay,
    moveDay,
    setDayMetadata,
    removeExercise
  }}>
    {children}
  </WorkoutContext.Provider>;
};