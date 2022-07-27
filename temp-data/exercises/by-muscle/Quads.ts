import {ExerciseInfo} from '../../../types/exercise';
import {
  BodyPart
} from '../../../components/workout-viewer/analytics/systems-data/SystemsCommon';
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
    bodyPart: BodyPart.Legs,
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  },
  {
    id: 'e261830c-a657-4f43-9f17-20e7bb6337bc',
    name: 'Leg press',
    bodyPart: BodyPart.Legs,
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  },
  {
    id: '76be5e99-8b96-4381-9949-27bc7c4992d6',
    name: 'Bulgarian split squat (quad focused)',
    bodyPart: BodyPart.Legs,
    muscleGroup: MuscleGroup.Quads,
    movementType: MovementType.Squat,
  }
];