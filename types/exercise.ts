import {
  BodyPart,
  ExperienceLevel,
  // IsolationLevel,


  // MuscleInvolvement
} from '../components/workout-viewer/analytics/systems-data/SystemsCommon';
import {
  MuscleGroup
} from '../components/workout-viewer/analytics/systems-data/MuscleGroupsValues';
import {
  MovementType
} from '../components/workout-viewer/analytics/systems-data/MovementTypeValues';

export type ExerciseInfo = {
  id: string;
  name: string;

  // description?: string;
  // difficulty?: ExperienceLevel;
  // /** Average seconds per 1 rep */
  // pace?: number;

  bodyPart: BodyPart;
  movementType: MovementType;
  muscleGroup: MuscleGroup;

  // isolationLevel: IsolationLevel;
  // muscleInvolvement: MuscleInvolvement;
}