import {WorkoutPlan} from '../types/workout';
import {ExerciseInfo} from '../types/exercise';

export const DemoProgram: WorkoutPlan = {
  isDemo: true,
  id: '3251ebb6-8642-4c20-b89d-6114566a94b2',
  title: 'Demo Program',
  recommendations: 'Warm up recommendations: before the workout you might do 5-10 minutes of light cardio like walking on a treadmill. Before each exercise do a few sets with lower weights until you feel confident and connected to the movement.',
  days: [
    {
      id: '638aec24-bbcd-44b2-8bb7-e6fc86e94450',
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
        }, {
          info: {
            id: '9b9464c1-569f-4f7c-9ba1-ec3a24a0ff0b',
            // name: 'Barbel curls',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 12, to: 15}
        }, {
          info: {
            id: 'c8790bb9-0b73-4071-a454-c758ccec01cb',
            // name: 'Triceps pushdown',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 12, to: 15}
        }
      ]
    },
    {
      id: '558016d2-d829-45be-a804-4723df652b4b',
      isRest: true
    },
    {
      id: 'b7e51a05-0c67-43da-b443-dcfb87f4138f',
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
    {
      id: '97a5910e-f565-4a3c-afe4-dff495a43eac',
      isRest: true
    }
  ]
};