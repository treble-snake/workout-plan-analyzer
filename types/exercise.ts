import {
  BodyPart,
  ExperienceLevel,
  MovementType,
  MuscleGroup
} from '../components/workout-viewer/analytics/Systems';

export type ExerciseInfo = {
  name: string;
  description: string;

  difficulty: ExperienceLevel;

  /** Average seconds per 1 rep */
  pace: number;

  bodyPart: BodyPart;
  movementType: MovementType;
  muscleGroup: MuscleGroup;
}