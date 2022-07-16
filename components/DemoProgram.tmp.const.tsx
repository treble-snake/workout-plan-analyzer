import {WorkoutPlan} from '../types/workout';
import {
  ExerciseInfo
} from '../types/exercise';
import {
  BodyPart,
  MovementType,
  MuscleGroup
} from './workout-viewer/analytics/Systems';

export const DempoProgram: WorkoutPlan = {
  title: 'Demo Program',
  shortDescription: 'Mess yourself up good!',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  days: [
    {
      title: 'Workout A',
      exercises: [
        {
          info: {
            name: 'Barbell squat',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Quads,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        }, {
          info: {
            name: 'Barbell bench press',
            bodyPart: BodyPart.Chest,
            muscleGroup: MuscleGroup.Chest,
            movementType: MovementType.Push,
          } as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        }, {
          info: {
            name: 'Barbell bent over row',
            bodyPart: BodyPart.Back,
            muscleGroup: MuscleGroup.Back,
            movementType: MovementType.Row,
          } as ExerciseInfo,
          sets: {from: 5, to: 5},
          reps: {from: 5, to: 5}
        },
        {
          exercises: [
            {
              info: {
                name: 'Barbel curls',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Biceps,
                movementType: MovementType.Curl,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
            {
              info: {
                name: 'Triceps pushdown',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Triceps,
                movementType: MovementType.Extend,
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
            name: 'Barbell squat',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Quads,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 3, to: 3}
        }, {
          info: {
            name: 'Overhead press',
            bodyPart: BodyPart.Shoulders,
            muscleGroup: MuscleGroup.FrontDelts,
            movementType: MovementType.Press,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {
            name: 'Deadlift',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Glutes,
            movementType: MovementType.Hinge,
          } as ExerciseInfo,
          sets: {from: 1, to: 1},
          reps: {from: 4, to: 6}
        },
      ]
    },
    {isRest: true}
  ]
};