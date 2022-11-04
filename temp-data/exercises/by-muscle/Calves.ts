import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export const CALVES_EXERCISES: ExerciseInfo[] = [
  {
    id: '1bdc3e1e-d1ad-414e-8e56-c8ce6a1d0c14',
    name: 'Standing calf raise',
    muscleGroup: MuscleGroup.Calves,
    movementType: MovementType.Calves,
  },
  {
    id: '43d201b9-28af-4659-9dfd-1a821d1cf203',
    name: 'Seated calf raise',
    muscleGroup: MuscleGroup.Calves,
    movementType: MovementType.Calves,
  }
];