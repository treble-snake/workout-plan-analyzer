import {createContext, useContext, useState} from 'react';
import {
  Exercise,
  QtyRange,
  Superset,
  WorkoutDay,
  WorkoutPlan
} from '../../types/workout';
import {DempoProgram} from '../../temp-data/DemoProgram.tmp.const';
import {clone, move, remove} from 'ramda';
import {SixDayExamplePlan} from '../../temp-data/SixDayExample.tmp.const';
import {EXERCISES_BY_ID} from '../../temp-data/exercises';

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

  setReps(range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number): void

  setSets(range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number): void;
}

const WorkoutContext = createContext<WorkoutContainer | null>(null);

export const useWorkoutContext = () => {
  return useContext(WorkoutContext)!;
};

const findExercise = (
  days: WorkoutPlan['days'],
  dayIndex: number,
  exerciseIndex: number,
  supersetIndex?: number
) => {
  const {exercises} = (days[dayIndex] as WorkoutDay);
  return supersetIndex ?
    (exercises[supersetIndex] as Superset).exercises[exerciseIndex] :
    exercises[exerciseIndex] as Exercise;
}

const normalizeExercise = (exc: Exercise): Exercise => {
  const info = EXERCISES_BY_ID[exc.info.id];
  if (!info) {
    throw new Error(`Exercise ${exc.info.id} not found`);
  }
  exc.info = {...exc.info, ...info};
  return exc;
};

const normalizePlan = (plan: WorkoutPlan): WorkoutPlan => {
  // TODO: extract and use AnalyticUtils ?
  const newPlan = clone(plan);
  plan.days.forEach((day) => {
    if ('exercises' in day) {
      day.exercises.forEach((exc) => {
        'exercises' in exc ?
          exc.exercises.forEach(normalizeExercise) :
          normalizeExercise(exc);
      });
    }
  })
  return newPlan;
}

export const WorkoutProvider = ({children}: any) => {
  const [plan, setPlan] = useState(normalizePlan(SixDayExamplePlan));
  // const [plan, setPlan] = useState(normalizePlan(DempoProgram));

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

  const setReps = (range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number) => {
    const days = clone(plan.days);
    const toChange = findExercise(days, dayIndex, exerciseIndex, supersetIndex);
    toChange.reps = range;
    setDays(days);
  };

  const setSets = (range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number) => {
    const days = clone(plan.days);
    const toChange = findExercise(days, dayIndex, exerciseIndex, supersetIndex);
    toChange.sets = range;
    setDays(days);
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
    removeExercise,
    setReps,
    setSets
  }}>
    {children}
  </WorkoutContext.Provider>;
};