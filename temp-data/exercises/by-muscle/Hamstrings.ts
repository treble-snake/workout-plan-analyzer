import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export const HAMSTRINGS_EXERCISES: ExerciseInfo[] = [
  {
    id: '27f79c27-945a-4ce8-88d6-7488d0b3f3b9',
    name: 'Lying leg curl',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  },
  {
    id: 'cc9b0fd3-d83d-4424-a77a-d2b67d190855',
    name: 'Romanian deadlift',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  },
  {
    id: 'cfd00b75-ae60-457f-8b9d-6a5e9c2c0f76',
    name: 'Back extensions',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  },
  {
    id: '81876d97-d2d0-4ac1-bba3-b0172bb9b746',
    name: 'Nordic curl',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  },
  {
    id: '082a4d37-7cc4-4e8b-af8c-5a06db60187d',
    name: 'Any Hamstrings variation',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  },
  {
    id: '5363b1d2-1246-4031-8196-cefaca796c42',
    name: 'Any Leg Curl variation',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  },
  {
    id: '10f7c503-46ee-4bae-8800-71a77019262a',
    name: 'Any Hip Hinge variation',
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  }
];