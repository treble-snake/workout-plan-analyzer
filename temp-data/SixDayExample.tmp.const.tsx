import {WorkoutPlan} from '../types/workout';
import {ExerciseInfo} from '../types/exercise';

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
            id: 'a51e5774-ebdb-4477-93fb-996f0bc58675',
            // name: 'Face pull',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 12, to: 15}
        }, {
          info: {
            id: '268f1a8e-35ab-489a-bba2-34ed2d9f20c5',
            // name: 'Incline DB bench press',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {
            id: 'e0f4e162-f04d-45e0-82eb-c9dc41a24374',
            // name: 'Arnold Press',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 12}
        }, {
          info: {
            id: '433af736-9527-4efb-b1a5-99bfe3b56a5d',
            // name: 'Chest press machine',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 12, to: 15}
        },
        {
          exercises: [
            {
              info: {
                id: '8811b1ee-b232-4a56-bff1-4d5419c7e28f',
                // name: 'Lateral raise',
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
        },
        {
          info: {
            id: 'f2d5a714-71eb-4a3b-918d-2f538ad37687',
            // name: 'Cable crossover (low to high)',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 15}
        },
        {
          info: {
            id: '273ed285-67cf-4819-a448-34155e1b5310',
            // name: 'Skiers',
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
            id: '27f79c27-945a-4ce8-88d6-7488d0b3f3b9',
            // name: 'Lying leg curl',
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 12, to: 15}
        }, {
          info: {
            id: '4b8f2b2e-0107-46af-a1a9-48f279170a18',
            // name: 'Barbell Squat (paused)',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 10}
        }, {
          info: {
            id: 'e261830c-a657-4f43-9f17-20e7bb6337bc',
            // name: 'Leg press',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        }, {
          info: {
            id: 'cc9b0fd3-d83d-4424-a77a-d2b67d190855',
            // name: 'Romanian deadlift',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 10}
        }, {
          info: {
            id: '8ce66a4c-8819-4512-8af2-792fafdf3e5e',
            // name: 'Reverse Lunges',
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 16, to: 20}
        }, {
          info: {
            id: '1bdc3e1e-d1ad-414e-8e56-c8ce6a1d0c14',
            // name: 'Standing calf raise (Smith)',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 40, to: 40}
        },
      ]
    },
    {
      title: 'Pull',
      exercises: [
        {
          info: {
            id: '2fc6e29e-623d-4351-b0ca-35d810bcc52c',
            // name: 'Lat pulldown',
          } as ExerciseInfo,
          sets: {from: 3, to: 3},
          reps: {from: 8, to: 12}
        }, {
          info: {
            id: 'd37d98bf-08e3-4639-8b2f-20b30a3e5b8f',
            // name: 'Landmine row',
          } as ExerciseInfo,
          sets: {from: 2, to: 4},
          reps: {from: 10, to: 12}
        }, {
          info: {
            id: '1c7a7cb9-4cdd-4b16-b888-b9383b1dcdb8',
            // name: 'Seated cable row',
          } as ExerciseInfo,
          sets: {from: 3, to: 3},
          reps: {from: 10, to: 12}
        }, {
          exercises: [
            {
            info: {
              id: 'bc2318a2-1fe5-4f8a-abe5-36d872978f55',
              // name: 'Standing cable pullover',
            } as ExerciseInfo,
            sets: {from: 2, to: 3},
            reps: {from: 12, to: 15}
          },{
            info: {
              id: '968bde1b-2489-4187-a135-db8376113645',
              // name: 'Barbell Upright row',
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
                id: 'f37064c5-daff-49a5-85db-5649ff2998ee',
                // name: 'DB Shrug',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }, {
              info: {
                id: '93828de1-4295-4e5d-9932-327e0faece29',
                // name: 'Incline DB Curl',
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
                id: '9b9464c1-569f-4f7c-9ba1-ec3a24a0ff0b',
                // name: 'Barbel curl',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 10}
            }, {
              info: {
                id: 'c8790bb9-0b73-4071-a454-c758ccec01cb',
                // name: 'Tricep pushdown',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
          ]
        }, {
          exercises: [
            {
              info: {
                id: 'fd4d93d5-6db0-4922-bbdc-166fbed7e8e5',
                // name: 'Reverse Barbel curl',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }, {
              info: {
                id: '59053cdf-0752-4517-9c87-5876391dddcf',
                // name: 'Triceps Extension',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 10}
            },
          ]
        }, {
          exercises: [
            {
              info: {
                id: 'e1b81ba0-2edd-43d9-adf1-7c6a061d5296',
                // name: 'Lateral raise (Cable)',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            }, {
              info: {
                id: 'f0af0388-99e7-4442-95b4-1ac00ea9dbe0',
                // name: 'Hammer curl (Cable)',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 12, to: 15}
            },
          ]
        },
        {
          info: {
            id: 'ba84bf05-cfc6-4b66-96dd-9a709110be99',
            // name: 'Lying Rear Delt raise',
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
            id: '2acd422c-a8f5-4168-8407-abbe9192fc87',
            // name: 'Deadlift',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 4, to: 6}
        }, {
          info: {
            id: '4b8f2b2e-0107-46af-a1a9-48f279170a18',
            // name: 'Barbell Squat',
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 8, to: 10}
        }, {
          info: {
            id: '76be5e99-8b96-4381-9949-27bc7c4992d6',
            // name: 'Bulgarian split squat (wide step)',
          } as ExerciseInfo,
          sets: {from: 2, to: 2},
          reps: {from: 10, to: 12}
        },
        {
          exercises: [
            {
              info: {
                id: '27f79c27-945a-4ce8-88d6-7488d0b3f3b9',
                // name: 'Lying leg curl',
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 12, to: 15}
            }, {
              info: {
                id: 'f37064c5-daff-49a5-85db-5649ff2998ee',
                // name: 'Shrugs',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 10, to: 12}
            },
          ]
        }, {
          info: {
            id: '43d201b9-28af-4659-9dfd-1a821d1cf203',
            // name: 'Seated calf raise',
          } as ExerciseInfo,
          sets: {from: 3, to: 5},
          reps: {from: 10, to: 12}
        },
      ]
    },
    {
      title: 'Upper',
      exercises: [
        {
          info: {
            id: 'a51e5774-ebdb-4477-93fb-996f0bc58675',
            // name: 'Face pull',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 15, to: 20}
        }, {
          info: {
            id: '732f4a21-7c19-4a40-a608-99345ba361ea',
            // name: 'Flat DB bench press',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 8, to: 12}
        },
        {
          info: {
            id: '2fc6e29e-623d-4351-b0ca-35d810bcc52c',
            // name: 'Lat pulldown',
          } as ExerciseInfo,
          sets: {from: 2, to: 3},
          reps: {from: 10, to: 12}
        },
        {
          exercises: [
            {
              info: {
                id: '9f8c7188-63ff-41a0-be74-e4b76a844ac5',
                // name: 'Overhead Press DB',
              } as ExerciseInfo,
              sets: {from: 2, to: 3},
              reps: {from: 8, to: 12}
            }, {
              info: {
                id: 'b812061b-7531-47de-aaa6-c34d3202f0a5',
                // name: 'Seated hammer 1-arm row',
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
                id: 'c8790bb9-0b73-4071-a454-c758ccec01cb',
                // name: 'Triceps pushdown',
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 20, to: 25}
            },
            {
              info: {
                id: '38952d79-84f7-486e-bf0a-cd01e30d9e8b',
                // name: 'Hammer curl (DB)',
              } as ExerciseInfo,
              sets: {from: 2, to: 2},
              reps: {from: 20, to: 25}
            },
            {
              info: {
                id: '8811b1ee-b232-4a56-bff1-4d5419c7e28f',
                // name: 'Lateral raise',
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