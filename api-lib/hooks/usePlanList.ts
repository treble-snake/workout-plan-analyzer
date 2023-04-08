import useSWR from 'swr';
import {WorkoutPlan} from '../../types/workout';

export function usePlanList() {
  const {data, error, isLoading} = useSWR<WorkoutPlan[]>('/plans');
  return {
    plans: data,
    isLoading,
    error
  };
}