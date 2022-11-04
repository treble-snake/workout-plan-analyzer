import {createContext, useContext, useEffect, useState} from 'react';
import {
  Exercise,
  QtyRange,
  Superset,
  WorkoutDay,
  WorkoutPlan
} from '../../types/workout';
import {clone, move, remove} from 'ramda';
import {ExerciseInfo} from '../../types/exercise';
import {denormalizePlan, normalizePlan} from './WorkoutUtils';
import {ViewerConfigProvider} from './ViewerConfigProvider';
import {PlanStorage} from '../../api-lib';

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

  addExercise(dayIndex: number, exerciseId: string, sets: QtyRange, reps: QtyRange): void;

  setReps(range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number): void

  setSets(range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number): void;

  setMeta(info: Partial<Pick<WorkoutPlan, 'title' | 'recommendations'>>): void;
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
};

const EMPTY_PLAN: WorkoutPlan = Object.freeze({
  id: '',
  isDraft: true,
  title: 'My New Awesome Plan',
  recommendations: 'Warm up recommendations: before the workout you might do 5-10 minutes of light cardio like walking on a treadmill. Before each exercise do a few sets with lower weights until you feel confident and connected to the movement.',
  days: [
    {
      exercises: []
    }
  ]
});

type Props = {
  id?: string;
  plan?: WorkoutPlan;
  children: any;
}

export const WorkoutProvider = ({children, id, plan: presetPlan}: Props) => {
  const [plan, setPlan] = useState(normalizePlan(presetPlan || clone(EMPTY_PLAN)));

  useEffect(() => {
    if (id) {
      PlanStorage.getPlan(id)
        .then((plan) => {
          if (plan) {
            setPlan(normalizePlan(plan));
          }
        });
    }
  }, [id]);

  useEffect(() => {
    if (plan.isDraft) {
      // TODO: throttle
      PlanStorage.saveDraft(denormalizePlan(plan))
        .then(() => console.debug('Draft saved'))
        .catch(e => console.error('Draft saving failed', e));
    }
  }, [plan]);


  const setDays = (days: WorkoutPlan['days']) => {
    setPlan(normalizePlan({...plan, days}));
  };

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
    const days = [...plan.days];
    const toChange = findExercise(days, dayIndex, exerciseIndex, supersetIndex);
    toChange.reps = range;
    setDays(days);
  };

  const setSets = (range: QtyRange, dayIndex: number, exerciseIndex: number, supersetIndex?: number) => {
    const days = [...plan.days];
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

  const addExercise = (dayIndex: number, exerciseId: string, sets: QtyRange, reps: QtyRange) => {
    const newDays = [...plan.days];
    const day = {...plan.days[dayIndex]} as WorkoutDay;
    newDays[dayIndex] = {
      ...newDays[dayIndex],
      exercises: day.exercises.concat({
        info: {id: exerciseId} as ExerciseInfo,
        sets, reps
      })
    };
    setDays(newDays);
  };

  const setMeta = (info: Partial<Pick<WorkoutPlan, 'title' | 'recommendations'>>) => {
    setPlan({...plan, ...info});
  };

  return <WorkoutContext.Provider value={{
    plan,
    addDay,
    removeDay,
    moveDay,
    setDayMetadata,
    addExercise,
    removeExercise,
    setReps,
    setSets,
    setMeta
  }}>
    <ViewerConfigProvider>
      {children}
    </ViewerConfigProvider>
  </WorkoutContext.Provider>;
};