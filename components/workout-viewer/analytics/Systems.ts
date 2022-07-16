export enum System {
  Muscle = 'Muscle',
  Movement = 'Movement',
  BodyPart = 'BodyPart'
}

export enum BodyPart {
  Legs = 'Legs',
  Back = 'Back',
  Chest = 'Chest',
  Shoulders = 'Shoulders',
  Arms = 'Arms',
  Abs = 'Abs',
}

/**
 * Form SWEAT! by Geoffrey Verity Schofield
 */
export enum MovementType {
  Squat = 'Squat',
  Hinge = 'Hinge',
  Row = 'Row',
  Pull = 'Pull',
  Push = 'Push',
  Press = 'Press',
  Shoulders = 'Shoulders',
  Extend = 'Extend',
  Curl = 'Curl',
  Calves = 'Calves',
  Abs = 'Abs',
}

/**
 * Per https://rpstrength.com/
 */
export enum MuscleGroup {
  Quads = 'Quads',
  Hamstrings = 'Hamstrings',
  Glutes = 'Glutes',
  Back = 'Back',
  Traps = 'Traps',
  Chest = 'Chest',
  FrontDelts = 'Front Delts',
  SideDelts = 'Side Delts',
  RearDelts = 'Rear Delts',
  Triceps = 'Triceps',
  Biceps = 'Biceps',
  Calves = 'Calves',
  Forearms = 'Forearms',
  Abs = 'Abs',
}

export enum ExperienceLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export const SystemsMeta = {
  [System.Muscle]: {
    title: 'Muscle Group',
    short: 'Muscle',
    units: MuscleGroup
  },
  [System.Movement]: {
    title: 'Movement type',
    short: 'Movement',
    units: MovementType
  },
  [System.BodyPart]: {
    title: 'Body part',
    short: 'Body part',
    units: BodyPart
  }
};