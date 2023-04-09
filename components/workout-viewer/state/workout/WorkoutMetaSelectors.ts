import {selector} from 'recoil';
import {workoutPlanState} from './WorkoutPlanState';

// TODO: use https://recoiljs.org/docs/api-reference/utils/selectorFamily#destructuring-example

export const planIdSelector = selector({
  key: 'planIdSelector',
  get: ({get}) => get(workoutPlanState).id,
});

export const planRecommendationsSelector = selector({
  key: 'planRecommendations',
  get: ({get}) => get(workoutPlanState).recommendations,
  set: ({set}, newValue) => {
    if (typeof newValue === 'string') {
      set(workoutPlanState, (oldPlan) => ({
        ...oldPlan,
        recommendations: newValue
      }));
    }
  }
});
export const planTitleSelector = selector({
  key: 'planTitle',
  get: ({get}) => get(workoutPlanState).title,
  set: ({set}, newValue) => {
    if (typeof newValue === 'string') {
      set(workoutPlanState, (oldPlan) => ({
        ...oldPlan,
        title: newValue
      }));
    }
  }
});
export const planIsDraftSelector = selector({
  key: 'planIsDraftSelector',
  get: ({get}) => get(workoutPlanState).isDraft,
});
export const planIsSharedSelector = selector({
  key: 'planIsSharedSelector',
  get: ({get}) => get(workoutPlanState).isShared,
});
export const planIsDemoSelector = selector({
  key: 'planIsDemoSelector',
  get: ({get}) => get(workoutPlanState).isDemo,
});
export const planTagsSelector = selector({
  key: 'planTagsSelector',
  get: ({get}) => {
    return {
      isDraft: get(planIsDraftSelector),
      isShared: get(planIsSharedSelector),
      isDemo: get(planIsDemoSelector),
    };
  }
});