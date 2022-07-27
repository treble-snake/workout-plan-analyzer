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

export const BACK_EXERCISES: ExerciseInfo[] = [
  {
    id: '2fc6e29e-623d-4351-b0ca-35d810bcc52c',
    name: 'Lat pulldown',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Back,
    movementType: MovementType.Pull,
  },
  {
    id: 'd37d98bf-08e3-4639-8b2f-20b30a3e5b8f',
    name: 'Landmine row',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Back,
    movementType: MovementType.Row,
  },
  {
    id: '1c7a7cb9-4cdd-4b16-b888-b9383b1dcdb8',
    name: 'Seated cable row',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Back,
    movementType: MovementType.Row,
  },
  {
    id: 'bc2318a2-1fe5-4f8a-abe5-36d872978f55',
    name: 'Standing cable pullover',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Back,
    movementType: MovementType.Pull,
  },
  {
    id: 'e95519ae-32d0-48dd-b863-372e427e1097',
    name: 'Barbell bent over row',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Back,
    movementType: MovementType.Row,
  },
  // TODO: Too specific
  {
    id: 'b812061b-7531-47de-aaa6-c34d3202f0a5',
    name: 'Seated hammer 1-arm row',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Back,
    movementType: MovementType.Row,
  },

  // traps
  {
    id: 'f37064c5-daff-49a5-85db-5649ff2998ee',
    name: 'Dumbbell Shrug',
    bodyPart: BodyPart.Back,
    muscleGroup: MuscleGroup.Traps,
    movementType: MovementType.Other,
  }
];