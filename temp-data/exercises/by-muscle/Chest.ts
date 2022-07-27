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

export const CHEST_EXERCISES: ExerciseInfo[] = [
  {
    id: '0ab5ce2e-9b96-4fbf-9303-b45bc62f3ca4',
    name: 'Barbell bench press (flat)',
    bodyPart: BodyPart.Chest,
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '732f4a21-7c19-4a40-a608-99345ba361ea',
    name: 'Dumbbell bench press (flat)',
    bodyPart: BodyPart.Chest,
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '268f1a8e-35ab-489a-bba2-34ed2d9f20c5',
    name: 'Incline Dumbbell bench press',
    bodyPart: BodyPart.Chest,
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '433af736-9527-4efb-b1a5-99bfe3b56a5d',
    name: 'Chest press machine',
    bodyPart: BodyPart.Chest,
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: 'f2d5a714-71eb-4a3b-918d-2f538ad37687',
    name: 'Cable crossover (low to high)',
    bodyPart: BodyPart.Chest,
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  }
];