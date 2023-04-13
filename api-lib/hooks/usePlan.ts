import useSWR from 'swr';
import {WorkoutPlan} from '../../types/workout';

export function usePlan(id: null | string) {
  const {
    data,
    error,
    isLoading,
    mutate
  } = useSWR<WorkoutPlan>(id === null ? null : `/plans/${id}`);
  const plan = data;
  return {
    plan,
    isLoading,
    error,
    mutate
  };
}