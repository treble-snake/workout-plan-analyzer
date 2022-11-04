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

  movementType: MovementType;
  muscleGroup: MuscleGroup;

  // isolationLevel: IsolationLevel;
  // muscleInvolvement: MuscleInvolvement;
}