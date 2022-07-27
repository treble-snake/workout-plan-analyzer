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

export const ARMS_EXERCISES: ExerciseInfo[] = [
  // biceps
  {
    id: '38952d79-84f7-486e-bf0a-cd01e30d9e8b',
    name: 'Dumbbell Hammer curl',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Biceps,
    movementType: MovementType.Curl,
  },
  {
    id: '93828de1-4295-4e5d-9932-327e0faece29',
    name: 'Incline Dumbbell Curl',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Biceps,
    movementType: MovementType.Curl,
  },
  {
    id: '9b9464c1-569f-4f7c-9ba1-ec3a24a0ff0b',
    name: 'Barbel curl',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Biceps,
    movementType: MovementType.Curl,
  },
  {
    id: 'fd4d93d5-6db0-4922-bbdc-166fbed7e8e5',
    name: 'Reverse Grip Barbel curl',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Biceps,
    movementType: MovementType.Curl,
  },
  {
    id: 'f0af0388-99e7-4442-95b4-1ac00ea9dbe0',
    name: 'Cable Hammer curl',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Biceps,
    movementType: MovementType.Curl,
  },
  // triceps
  {
    id: 'c8790bb9-0b73-4071-a454-c758ccec01cb',
    name: 'Triceps pushdown',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Triceps,
    movementType: MovementType.Extend,
  },
  {
    id: '59053cdf-0752-4517-9c87-5876391dddcf',
    name: 'Overhead Triceps Extension',
    bodyPart: BodyPart.Arms,
    muscleGroup: MuscleGroup.Triceps,
    movementType: MovementType.Extend,
  }
];