export enum BodyPart {
  Chest = 'Chest',
  Back = 'Back',
  Shoulders = 'Shoulders',
  Arms = 'Arms',
  Abs = 'Abs',
  Legs = 'Legs',
}

/**
 * Form SWEAT! by Geoffrey Verity Schofield
 */
export enum MovementType {
  Hinge = 'Hinge',
  Squat = 'Squat',
  Row = 'Row',
  Push = 'Push',
  Pull = 'Pull',
  Press = 'Press',
  Shoulders = 'Shoulders',
  Curl = 'Curl',
  Extend = 'Extend',
  Abs = 'Abs',
  Calves = 'Calves',
}

/**
 * Per https://rpstrength.com/
 */
export enum MuscleGroup {
  Back = 'Back',
  Abs = 'Abs',
  Traps = 'Traps',
  Triceps = 'Triceps',
  Forearms = 'Forearms',
  Calves = 'Calves',
  FrontDelts = 'FrontDelts',
  Glutes = 'Glutes',
  Chest = 'Chest',
  Biceps = 'Biceps',
  Quads = 'Quads',
  SideDelts = 'SideDelts',
  RearDelts = 'RearDelts',
}

export enum ExperienceLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

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