import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

const type = {
  muscleGroup: MuscleGroup.Abs,
  movementType: MovementType.Abs,
};

export const ABS_EXERCISES: ExerciseInfo[] = [
  {
    id: '85db96b9-a21e-4464-b43b-49682e77da66',
    name: 'Sit-ups',
    ...type,
  },
  {
    id: 'bba8ce12-95f4-49ed-bee6-86f38365e986',
    name: 'Cable crunch',
    ...type,
  },
  {
    id: '2325d1fb-ba31-41d3-aaf1-b7e0940230b5',
    name: 'Hanging Knee Raise',
    ...type,
  },
  {
    id: 'b23ca2c1-8faf-4f80-acc2-8998d0dc2b99',
    name: 'Hanging Straight Leg Raise',
    ...type,
  },
  {
    id: '52691f62-315f-41d9-a48a-5039e18b1fae',
    name: 'Machine Crunch',
    ...type,
  },
  {
    id: '5917b6a7-876b-495e-82bc-7da39bf43de0',
    name: 'V-up',
    ...type,
  },  {
    id: '8805814d-cfb2-4bc1-b677-d8909f3a0183',
    name: 'Ab wheel',
    ...type,
  },
  {
    id: '1173fbc8-907b-41c6-a75c-77225b5dddc5',
    name: 'Any ab variation',
    ...type,
  },
  {
    id: 'b2883ff0-110b-4fa8-ab99-b8aecb083e6e',
    name: 'Crunch variation',
    ...type
  },
  {
    id: '34a46f10-912d-4a04-a5aa-60480924e4cf',
    name: 'Leg Raise variation',
    ...type
  },
  {
    id: '957afbe2-fe5d-4d7d-be23-a7714aba75af',
    name: 'Plank variation',
    ...type
  }
];