import useSWR from 'swr';
import {WorkoutPlan} from '../../types/workout';
import {normalizePlan} from '../../components/workout-viewer/WorkoutUtils';

export function usePlan(id: null | string) {
  const {
    data,
    error,
    isLoading
  } = useSWR<WorkoutPlan>(id === null ? null : `/plans/${id}`);
  const plan = data ? normalizePlan(data) : data;
  return {
    plan,
    isLoading,
    error
  };
}