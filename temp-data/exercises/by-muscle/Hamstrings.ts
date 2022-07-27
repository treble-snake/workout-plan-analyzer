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

export const HAMSTRINGS_EXERCISES: ExerciseInfo[] = [
  {
    id: '27f79c27-945a-4ce8-88d6-7488d0b3f3b9',
    name: 'Lying leg curl',
    bodyPart: BodyPart.Legs,
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  }, {
    id: 'cc9b0fd3-d83d-4424-a77a-d2b67d190855',
    name: 'Romanian deadlift',
    bodyPart: BodyPart.Legs,
    muscleGroup: MuscleGroup.Hamstrings,
    movementType: MovementType.Hinge,
  }
];