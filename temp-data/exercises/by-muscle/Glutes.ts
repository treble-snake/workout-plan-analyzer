import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export const GLUTES_EXERCISES: ExerciseInfo[] = [
  {
    id: '2acd422c-a8f5-4168-8407-abbe9192fc87',
    name: 'Deadlift (conventional)',
    muscleGroup: MuscleGroup.Glutes,
    movementType: MovementType.Hinge,
  },
  {
    id: '8ce66a4c-8819-4512-8af2-792fafdf3e5e',
    name: 'Reverse Lunges',
    muscleGroup: MuscleGroup.Glutes,
    movementType: MovementType.Squat,
  },
  {
    id: 'bf1c5da1-3d2c-40be-b2c0-08c65da9dfa0',
    name: 'Cable Pull-Through',
    muscleGroup: MuscleGroup.Glutes,
    movementType: MovementType.Hinge,
  }
];