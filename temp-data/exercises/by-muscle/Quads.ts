import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export const QUADS_EXERCISES: ExerciseInfo[] = [
  {
    id: '4b8f2b2e-0107-46af-a1a9-48f279170a18',
    name: 'Barbell squat',
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  },
  {
    id: 'e261830c-a657-4f43-9f17-20e7bb6337bc',
    name: 'Leg press',
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  },
  {
    id: '76be5e99-8b96-4381-9949-27bc7c4992d6',
    name: 'Bulgarian split squat (quad focused)',
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  },
  {
    id: '2dac6dbb-3b64-4ba0-9e3f-20ff7091e290',
    name: 'Leg extension',
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  },
  {
    id: 'cad8d3f4-3bd9-4396-af89-4bc792fbde8a',
    name: 'Goblet Squat',
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  }
];