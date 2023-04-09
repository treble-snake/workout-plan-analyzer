import {atom, DefaultValue, selector, selectorFamily} from 'recoil';
import {WorkoutPlan} from '../../../../types/workout';
import {EMPTY_PLAN} from '../../../../common/constants';
import {clone, indexBy, map, mergeRight, prop} from 'ramda';
import {makeNewDay} from '../../WorkoutUtils';
import {PlanStorage} from '../../../../api-lib';

export const workoutPlanState = atom<WorkoutPlan>({
  key: 'workoutState',
  default: clone(EMPTY_PLAN),
  effects: [
    ({onSet}) => {
      onSet((workoutPlan) => {
        // TODO: autosave all plans?
        if (workoutPlan.isDraft) {
          PlanStorage.saveDraft(workoutPlan).catch(console.error);
        }
      });
    }
  ]
});

export const workoutPlanLengthSelector = selector({
  key: 'workoutPlanLengthSelector',
  get: ({get}) => get(workoutPlanState).days.length
});

export const workoutDayIdsSelector = selector({
  key: 'workoutDayIdsSelector',
  get: ({get}) => map(prop('id'), get(workoutPlanState).days)
});

export const workoutPlanDaysSelector = selector({
  key: 'workoutPlanDaysSelector',
  get: ({get}) => get(workoutPlanState).days,
  set: ({set}, newValue) => {
    const days = newValue instanceof DefaultValue ? [] : newValue;
    set(workoutPlanState, (currentPlan) => {
      return {...currentPlan, days};
    });
  }
});

export const workoutDaysMapById = selector({
  key: 'workoutDaysByIdSelector',
  get: ({get}) => {
    const days = get(workoutPlanDaysSelector);
    return indexBy(prop('id'), days);
  }
});

export const workoutDayById = selectorFamily({
  key: 'workoutDayByIdSelectorFamily',
  get: (id: string) => ({get}) => {
    const days = get(workoutDaysMapById);
    return days[id];
  },
  set: (id: string) => ({set}, newValue) => {
    const value = newValue instanceof DefaultValue ? makeNewDay() : newValue;
    set(workoutPlanState, (currentPlan) => {
      const newDays = [...currentPlan.days];
      const index = newDays.findIndex((day) => id === day.id);
      newDays[index] = value;
      return {...currentPlan, days: newDays};
    });
  }
});

export const workoutDayExercisesSelector = selectorFamily({
  key: 'workoutDayExercisesSelector',
  get: (dayId: string) => ({get}) => {
    const day = get(workoutDayById(dayId));
    return ('isRest' in day) ? [] : day.exercises;
  },
  set: (dayId: string) => ({set}, newValue) => {
    const value = newValue instanceof DefaultValue ? [] : newValue;
    set(workoutDayById(dayId), (currentDay) => {
      if ('isRest' in currentDay) {
        return currentDay;
      }
      return {...currentDay, exercises: value};
    });
  }
});