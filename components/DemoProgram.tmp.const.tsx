import {WorkoutPlan} from '../types/workout';
import {ExerciseInfo} from '../types/exercise';

export const DempoProgram: WorkoutPlan = {
  title: 'Demo Program',
  shortDescription: 'Mess yourself up good!',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  days: [
    {
      title: 'Workout A',
      exercises: [
        {
          info: {name: 'Barbell squat'} as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        }, {
          info: {name: 'Bench press'} as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        }, {
          info: {name: 'Bent-over row'} as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        },
        {
          exercises: [
            {
              info: {name: 'Barbel curls'} as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
            {
              info: {name: 'Triceps pushdown'} as ExerciseInfo,
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
          info: {name: 'Barbell squat'} as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 3, to: 3}
        }, {
          info: {name: 'Overhead press'} as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {name: 'Deadlift'} as ExerciseInfo,
          sets: {from: 1, to: 1},
          reps: {from: 4, to: 6}
        },
      ]
    },
    {isRest: true}
  ]
};