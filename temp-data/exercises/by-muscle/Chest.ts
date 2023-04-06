import {ExerciseInfo} from '../../../types/exercise';
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
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '732f4a21-7c19-4a40-a608-99345ba361ea',
    name: 'Dumbbell bench press (flat)',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '268f1a8e-35ab-489a-bba2-34ed2d9f20c5',
    name: 'Incline Dumbbell bench press',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '433af736-9527-4efb-b1a5-99bfe3b56a5d',
    name: 'Chest press machine',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: 'f2d5a714-71eb-4a3b-918d-2f538ad37687',
    name: 'Cable crossover (low to high)',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '536bd9dd-8291-4b1e-8a7e-2a07225b3d01',
    name: 'Push-ups',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '07b7556c-6809-48d9-9030-0fc76a0abf99',
    name: 'Deficit push-ups',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '11c6325f-9b3b-435b-b339-96eab0822f96',
    name: 'Pec deck',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  },
  {
    id: '8782fc27-ed26-41e2-87f4-f127f4d1f47a',
    name: 'Any chest variation',
    muscleGroup: MuscleGroup.Chest,
    movementType: MovementType.Push,
  }
];