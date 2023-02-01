import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export const SHOULDERS_EXERCISES: ExerciseInfo[] = [
  // front delts
  {
    id: '8c2368f3-6975-4574-80d6-d397ec437045',
    name: 'Barbell Overhead press',
    muscleGroup: MuscleGroup.FrontDelts,
    movementType: MovementType.Press,
  },
  {
    id: 'e0f4e162-f04d-45e0-82eb-c9dc41a24374',
    name: 'Arnold Press',
    muscleGroup: MuscleGroup.FrontDelts,
    movementType: MovementType.Press,
  },
  {
    id: '9f8c7188-63ff-41a0-be74-e4b76a844ac5',
    name: 'Dumbbell Overhead Press',
    muscleGroup: MuscleGroup.FrontDelts,
    movementType: MovementType.Press,
  },
  // side delts
  {
    id: '8811b1ee-b232-4a56-bff1-4d5419c7e28f',
    name: 'Dumbbell Lateral raise',
    muscleGroup: MuscleGroup.SideDelts,
    movementType: MovementType.Shoulders,
  },
  {
    id: '98dbf00d-23f1-423b-a7d5-aef187dd20c1',
    name: 'Machine Lateral raise',
    muscleGroup: MuscleGroup.SideDelts,
    movementType: MovementType.Shoulders,
  },
  {
    id: '968bde1b-2489-4187-a135-db8376113645',
    name: 'Barbell Upright row',
    muscleGroup: MuscleGroup.SideDelts,
    movementType: MovementType.Shoulders,
  },
  {
    id: 'e1b81ba0-2edd-43d9-adf1-7c6a061d5296',
    name: 'Cable Lateral raise',
    muscleGroup: MuscleGroup.SideDelts,
    movementType: MovementType.Shoulders,
  },
  // rear delts
  {
    id: 'a51e5774-ebdb-4477-93fb-996f0bc58675',
    name: 'Face pull',
    muscleGroup: MuscleGroup.RearDelts,
    movementType: MovementType.Shoulders,
  },
  {
    id: '273ed285-67cf-4819-a448-34155e1b5310',
    name: 'Skiers',
    muscleGroup: MuscleGroup.RearDelts,
    movementType: MovementType.Shoulders,
  },
  {
    id: 'ba84bf05-cfc6-4b66-96dd-9a709110be99',
    name: 'Lying Rear Delt raise',
    muscleGroup: MuscleGroup.RearDelts,
    movementType: MovementType.Shoulders,
  }
];