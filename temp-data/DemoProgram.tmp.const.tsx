import {WorkoutPlan} from '../types/workout';
import {ExerciseInfo} from '../types/exercise';

export const DemoProgram: WorkoutPlan = {
  id: '3251ebb6-8642-4c20-b89d-6114566a94b2',
  title: 'Demo Program',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  days: [
    {
      title: 'Workout A',
      exercises: [
        {
          info: {
            id: '4b8f2b2e-0107-46af-a1a9-48f279170a18',
            // name: 'Barbell squat',
          } as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        }, {
          info: {
            id: '0ab5ce2e-9b96-4fbf-9303-b45bc62f3ca4',
            // name: 'Barbell bench press',
          } as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        }, {
          info: {
            id: 'e95519ae-32d0-48dd-b863-372e427e1097',
            // name: 'Barbell bent over row',
          } as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        },
        {
          exercises: [
            {
              info: {
                id: '9b9464c1-569f-4f7c-9ba1-ec3a24a0ff0b',
                // name: 'Barbel curls',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
            {
              info: {
                id: 'c8790bb9-0b73-4071-a454-c758ccec01cb',
                // name: 'Triceps pushdown',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }
          ]
        }
      ]
    },
    {isRest: true},
    {
      title: 'Workout B',
      exercises: [
        {
          info: {
            id: '4b8f2b2e-0107-46af-a1a9-48f279170a18',
            // name: 'Barbell squat',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 3, to: 3}
        }, {
          info: {
            id: '8c2368f3-6975-4574-80d6-d397ec437045',
            // name: 'Overhead press',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {
            id: '2acd422c-a8f5-4168-8407-abbe9192fc87',
            // name: 'Deadlift (conventional)',
          } as ExerciseInfo,
          sets: {from: 1, to: 1},
          reps: {from: 4, to: 6}
        },
      ]
    },
    {isRest: true}
  ]
};