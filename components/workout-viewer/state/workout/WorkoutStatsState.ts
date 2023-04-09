import {selectorFamily} from 'recoil';
import {workoutDayExercisesSelector} from './WorkoutPlanState';
import {calculateWorkingSetsV2} from '../../analytics/utils/WorkingSets';


export const workoutDaysStatsSelector = selectorFamily({
  key: 'workoutDaysStatsSelector',
  get: (dayId: string) => ({get}) => {
    const exercises = get(workoutDayExercisesSelector(dayId));
    return calculateWorkingSetsV2(exercises);
  }
});