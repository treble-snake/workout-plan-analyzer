import {WorkoutPlan} from '../types/workout';
import {
  ExerciseInfo
} from '../types/exercise';
import {
  BodyPart,
  MovementType,
  MuscleGroup
} from './workout-viewer/analytics/Systems';

export const SixDayExamplePlan: WorkoutPlan = {
  title: '6-day example',
  shortDescription: 'Mess yourself up good!',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  days: [
    {
      title: 'Push',
      exercises: [
        {
          info: {
            name: 'Face pull',
            bodyPart: BodyPart.Shoulders,
            muscleGroup: MuscleGroup.RearDelts,
            movementType: MovementType.Shoulders,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 12, to: 15}
        }, {
          info: {
            name: 'Incline DB bench press',
            bodyPart: BodyPart.Chest,
            muscleGroup: MuscleGroup.Chest,
            movementType: MovementType.Push,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {
            name: 'Arnold Press',
            bodyPart: BodyPart.Shoulders,
            muscleGroup: MuscleGroup.FrontDelts,
            movementType: MovementType.Press,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 12}
        }, {
          info: {
            name: 'Chest press machine',
            bodyPart: BodyPart.Chest,
            muscleGroup: MuscleGroup.Chest,
            movementType: MovementType.Push,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 12, to: 15}
        },
        {
          exercises: [
            {
              info: {
                name: 'Lateral raise',
                bodyPart: BodyPart.Shoulders,
                muscleGroup: MuscleGroup.SideDelts,
                movementType: MovementType.Shoulders,
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
        },
        {
          info: {
            name: 'Cable crossover',
            bodyPart: BodyPart.Chest,
            muscleGroup: MuscleGroup.Chest,
            movementType: MovementType.Push,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 15}
        },
        {
          info: {
            name: 'Skiers',
            bodyPart: BodyPart.Shoulders,
            muscleGroup: MuscleGroup.RearDelts,
            movementType: MovementType.Shoulders,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 15, to: 20}
        },
      ]
    },
    {
      title: 'Legs',
      exercises: [
        {
          info: {
            name: 'Lying leg curl',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Hamstrings,
            movementType: MovementType.Hinge,
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 12, to: 15}
        }, {
          info: {
            name: 'Barbell Squat (paused)',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Quads,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 10}
        }, {
          info: {
            name: 'Leg press',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Quads,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {
            name: 'Romanian deadlift',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Hamstrings,
            movementType: MovementType.Hinge,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 10}
        }, {
          info: {
            name: 'Lunges',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Glutes,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 16, to: 20}
        }, {
          info: {
            name: 'Standing calf raise (Smith)',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Calves,
            movementType: MovementType.Calves,
          } as ExerciseInfo,
          sets: {from: 1, to: 2},
          reps: {from: 40, to: 40}
        },
      ]
    },
    {
      title: 'Pull',
      exercises: [
        {
          info: {
            name: 'Lat pulldown',
            bodyPart: BodyPart.Back,
            muscleGroup: MuscleGroup.Back,
            movementType: MovementType.Pull,
          } as ExerciseInfo,
          sets: {from: 3, to: 3},
          reps: {from: 8, to: 12}
        }, {
          info: {
            name: 'T bar row',
            bodyPart: BodyPart.Back,
            muscleGroup: MuscleGroup.Back,
            movementType: MovementType.Row,
          } as ExerciseInfo,
          sets: {from: 2, to: 4},
          reps: {from: 10, to: 12}
        }, {
          info: {
            name: 'Seated cable row',
            bodyPart: BodyPart.Back,
            muscleGroup: MuscleGroup.Back,
            movementType: MovementType.Row,
          } as ExerciseInfo,
          sets: {from: 3, to: 3},
          reps: {from: 10, to: 12}
        }, {
          exercises: [
            {
            info: {
              name: 'Standing cable pullover',
              bodyPart: BodyPart.Back,
              muscleGroup: MuscleGroup.Back,
              movementType: MovementType.Pull,
            } as ExerciseInfo,
            sets: {from: 2, to: 3},
            reps: {from: 12, to: 15}
          },{
            info: {
              name: 'Upright row (Smith?)',
              bodyPart: BodyPart.Shoulders,
              muscleGroup: MuscleGroup.SideDelts,
              movementType: MovementType.Shoulders,
            } as ExerciseInfo,
            sets: {from: 2, to: 3},
            reps: {from: 14, to: 18}
          },
          ]
        },
        {
          exercises: [
            {
              info: {
                name: 'DB Shrug',
                bodyPart: BodyPart.Back,
                muscleGroup: MuscleGroup.Traps,
                movementType: MovementType.Other,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }, {
              info: {
                name: 'Incline DB Curl',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Biceps,
                movementType: MovementType.Curl,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
          ]
        }
      ]
    },
    {
      title: 'Bro Day',
      exercises: [
        {
          exercises: [
            {
              info: {
                name: 'Barbel curl',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Biceps,
                movementType: MovementType.Curl,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 10}
            }, {
              info: {
                name: 'Tricep cable pushdown',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Triceps,
                movementType: MovementType.Extend,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
          ]
        }, {
          exercises: [
            {
              info: {
                name: 'Reverse Barbel curl',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Biceps,
                movementType: MovementType.Curl,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }, {
              info: {
                name: 'Triceps Extension',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Triceps,
                movementType: MovementType.Extend,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 10}
            },
          ]
        }, {
          exercises: [
            {
              info: {
                name: 'Lateral raise (Cable)',
                bodyPart: BodyPart.Shoulders,
                muscleGroup: MuscleGroup.SideDelts,
                movementType: MovementType.Shoulders,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }, {
              info: {
                name: 'Hammer curl (Cable)',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Biceps,
                movementType: MovementType.Curl,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
          ]
        },
        {
          info: {
            name: 'Lying Rear Delt raise',
            bodyPart: BodyPart.Shoulders,
            muscleGroup: MuscleGroup.RearDelts,
            movementType: MovementType.Shoulders,
          } as ExerciseInfo,
          sets: {from: 2, to: 4},
          reps: {from: 12, to: 15}
        },
      ]
    },
    {
      title: 'Lower',
      exercises: [
        {
          info: {
            name: 'Deadlift',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Glutes,
            movementType: MovementType.Hinge,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 4, to: 6}
        }, {
          info: {
            name: 'Barbell Squat',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Quads,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 8, to: 10}
        }, {
          info: {
            name: 'Bulgarian split squat (wide step)',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Quads,
            movementType: MovementType.Squat,
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 10, to: 12}
        },
        {
          exercises: [
            {
              info: {
                name: 'Lying leg curl',
                bodyPart: BodyPart.Legs,
                muscleGroup: MuscleGroup.Hamstrings,
                movementType: MovementType.Hinge,
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 12, to: 15}
            }, {
              info: {
                name: 'Shrugs',
                bodyPart: BodyPart.Back,
                muscleGroup: MuscleGroup.Traps,
                movementType: MovementType.Other,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 10, to: 12}
            },
          ]
        }, {
          info: {
            name: 'Seated calf raise',
            bodyPart: BodyPart.Legs,
            muscleGroup: MuscleGroup.Calves,
            movementType: MovementType.Calves,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        },
      ]
    },
    {
      title: 'Upper',
      exercises: [
        {
          info: {
            name: 'Face pull',
            bodyPart: BodyPart.Shoulders,
            muscleGroup: MuscleGroup.RearDelts,
            movementType: MovementType.Shoulders,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 15, to: 20}
        }, {
          info: {
            name: 'Flat DB bench press',
            bodyPart: BodyPart.Chest,
            muscleGroup: MuscleGroup.Chest,
            movementType: MovementType.Push,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 12}
        },
        {
          info: {
            name: 'Lat pulldown',
            bodyPart: BodyPart.Back,
            muscleGroup: MuscleGroup.Back,
            movementType: MovementType.Pull,
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        },
        {
          exercises: [
            {
              info: {
                name: 'Overhead Press DB',
                bodyPart: BodyPart.Shoulders,
                muscleGroup: MuscleGroup.FrontDelts,
                movementType: MovementType.Press,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 12}
            }, {
              info: {
                name: 'Seated hammer 1-arm row',
                bodyPart: BodyPart.Back,
                muscleGroup: MuscleGroup.Back,
                movementType: MovementType.Row,
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 12}
            },
          ]
        },
        {
          exercises: [
            {
              info: {
                name: 'Triceps pushdown',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Triceps,
                movementType: MovementType.Extend,
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 20, to: 25}
            },
            {
              info: {
                name: 'Hammer curl (DB)',
                bodyPart: BodyPart.Arms,
                muscleGroup: MuscleGroup.Biceps,
                movementType: MovementType.Curl,
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 20, to: 25}
            },
            {
              info: {
                name: 'Lateral raise',
                bodyPart: BodyPart.Shoulders,
                muscleGroup: MuscleGroup.SideDelts,
                movementType: MovementType.Shoulders,
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 20, to: 25}
            },
          ]
        },
      ]
    },
    {isRest: true}
  ]
};