import useSWR from 'swr';
import {WorkoutPlan} from '../../types/workout';

export function useDraft() {
  const {data, error, isLoading} = useSWR<WorkoutPlan>('/draft');
  return {
    draft: data,
    isLoading,
    error
  };
}