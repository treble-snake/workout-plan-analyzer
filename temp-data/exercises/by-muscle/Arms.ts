import {ExerciseInfo} from '../../../types/exercise';
import {
  MuscleGroup
} from '../../../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../../../components/workout-viewer/analytics/systems-data/MovementTypeValues';

const BICEPS_TYPE = {
  muscleGroup: MuscleGroup.Biceps,
  movementType: MovementType.Curl,
};

const TRICEPS_TYPE = {
  muscleGroup: MuscleGroup.Triceps,
  movementType: MovementType.Extend,
};

export const ARMS_EXERCISES: ExerciseInfo[] = [
  // biceps
  {
    id: '38952d79-84f7-486e-bf0a-cd01e30d9e8b',
    name: 'Dumbbell Hammer curl',
    ...BICEPS_TYPE
  },  {
    id: '3c815064-e79a-46b3-931b-d5ed8c0fa2e2',
    name: 'Pinwheel curl',
    ...BICEPS_TYPE
  },
  {
    id: '93828de1-4295-4e5d-9932-327e0faece29',
    name: 'Incline Dumbbell Curl',
    ...BICEPS_TYPE
  },
  {
    id: '6be964a1-7b63-4cd0-b292-8d190875e861',
    name: 'Barbell Curl',
    ...BICEPS_TYPE
  },
  {
    id: '9b9464c1-569f-4f7c-9ba1-ec3a24a0ff0b',
    name: 'Barbel curl',
    ...BICEPS_TYPE
  },
  {
    id: 'fd4d93d5-6db0-4922-bbdc-166fbed7e8e5',
    name: 'Reverse Grip Barbel curl',
    ...BICEPS_TYPE
  },
  {
    id: 'f0af0388-99e7-4442-95b4-1ac00ea9dbe0',
    name: 'Cable Hammer curl',
    ...BICEPS_TYPE
  },
  {
    id: '5a4e9c98-4baa-414a-98a7-23bbfe5b7b6f',
    name: 'Cable curl',
    ...BICEPS_TYPE
  },
  {
    id: 'acb35a2b-ec9e-4c89-a296-5246ec2ebdc1',
    name: 'Spider curl',
    ...BICEPS_TYPE
  },
  {
    id: '2b624112-b197-4bc4-ba15-49894e02c226',
    name: 'Preacher curl',
    ...BICEPS_TYPE
  },
  {
    id: '6864d89e-8da8-4eea-bd5a-810582657d98',
    name: 'Pinwheel Curl',
    ...BICEPS_TYPE
  },
  {
    id: '2279459b-de8f-4b8c-b7c4-d8490cd552e4',
    name: 'Generic biceps exercise',
    ...BICEPS_TYPE,
  },
  // triceps
  {
    id: 'c8790bb9-0b73-4071-a454-c758ccec01cb',
    name: 'Triceps pushdown',
    ...TRICEPS_TYPE
  },
  {
    id: '59053cdf-0752-4517-9c87-5876391dddcf',
    name: 'Overhead Triceps Extension',
    ...TRICEPS_TYPE
  },
  {
    id: 'b461e945-47be-4b34-9bc4-9fd729fca05f',
    name: 'Diamond push-ups',
    ...TRICEPS_TYPE
  },
  {
    id: '3c7e50fa-0a8a-4be8-9d8e-5c02827afc18',
    name: '1-arm triceps pushdown',
    ...TRICEPS_TYPE
  },
  {
    id: 'b7c12056-4052-4785-8586-92fdd3aa879b',
    name: 'Dips',
    ...TRICEPS_TYPE
  },
  {
    id: 'b236975d-4b64-452c-81b3-c02c81752a18',
    name: 'Skullcrusher',
    ...TRICEPS_TYPE
  },
  {
    id: 'e09236b8-e6d8-4431-9b16-403fdf01cee3',
    name: 'Close Grip Bench Press',
    ...TRICEPS_TYPE
  },
  {
    id: 'ebdfb1ee-3b17-4040-9ec5-ab9c4a26279b',
    name: 'JM Press',
    ...TRICEPS_TYPE
  },
  {
    id: '09ac8c2b-5275-4f80-9abd-260d9d27b976',
    name: 'PJR Pullover',
    ...TRICEPS_TYPE
  },
  {
    id: '417d48f3-57fd-4775-a8a4-86463ff0be3b',
    name: 'Generic triceps exercise',
    ...TRICEPS_TYPE,
  },
];