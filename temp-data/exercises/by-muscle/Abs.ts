import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export const ABS_EXERCISES: ExerciseInfo[] = [
  {
    id: '85db96b9-a21e-4464-b43b-49682e77da66',
    name: 'Sit-ups',
    muscleGroup: MuscleGroup.Abs,
    movementType: MovementType.Abs,
  },
  {
    id: 'bba8ce12-95f4-49ed-bee6-86f38365e986',
    name: 'Cable crunch',
    muscleGroup: MuscleGroup.Abs,
    movementType: MovementType.Abs,
  },
];