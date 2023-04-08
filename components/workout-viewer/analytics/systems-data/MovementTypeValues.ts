import {ExperienceLevel} from './SystemsCommon';

export enum VolumeType {
  Balanced = 'Balanced',
  Specialization = 'Specialization'
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
  Forearms = 'Forearms'
}

const Beginner = {
  [MovementType.Hinge]: {
    [VolumeType.Balanced]: {from: 3, to: 6},
    [VolumeType.Specialization]: {from: 6, to: 10},
  },
  [MovementType.Squat]: {
    [VolumeType.Balanced]: {from: 3, to: 8},
    [VolumeType.Specialization]: {from: 8, to: 12},
  },
  [MovementType.Press]: {
    [VolumeType.Balanced]: {from: 3, to: 6},
    [VolumeType.Specialization]: {from: 6, to: 10},
  },
  [MovementType.Pull]: {
    [VolumeType.Balanced]: {from: 4, to: 8},
    [VolumeType.Specialization]: {from: 8, to: 14},
  },
  [MovementType.Push]: {
    [VolumeType.Balanced]: {from: 2, to: 8},
    [VolumeType.Specialization]: {from: 8, to: 12},
  },
  [MovementType.Row]: {
    [VolumeType.Balanced]: {from: 2, to: 6},
    [VolumeType.Specialization]: {from: 6, to: 10},
  },
  [MovementType.Shoulders]: {
    [VolumeType.Balanced]: {from: 4, to: 8},
    [VolumeType.Specialization]: {from: 10, to: 12},
  },
  [MovementType.Curl]: {
    [VolumeType.Balanced]: {from: 0, to: 4},
    [VolumeType.Specialization]: {from: 6, to: 8},
  },
  [MovementType.Extend]: {
    [VolumeType.Balanced]: {from: 0, to: 4},
    [VolumeType.Specialization]: {from: 6, to: 8},
  },
  [MovementType.Abs]: {
    [VolumeType.Balanced]: {from: 2, to: 4},
    [VolumeType.Specialization]: {from: 6, to: 8},
  },
  [MovementType.Calves]: {
    [VolumeType.Balanced]: {from: 0, to: 4},
    [VolumeType.Specialization]: {from: 10, to: 12},
  },
  [MovementType.Forearms]: null
};

const Intermediate = {
  [MovementType.Hinge]: {
    [VolumeType.Balanced]: {from: 4, to: 10},
    [VolumeType.Specialization]: {from: 10, to: 14},
  },
  [MovementType.Squat]: {
    [VolumeType.Balanced]: {from: 4, to: 10},
    [VolumeType.Specialization]: {from: 12, to: 18},
  },
  [MovementType.Press]: {
    [VolumeType.Balanced]: {from: 4, to: 8},
    [VolumeType.Specialization]: {from: 10, to: 14},
  },
  [MovementType.Pull]: {
    [VolumeType.Balanced]: {from: 6, to: 12},
    [VolumeType.Specialization]: {from: 12, to: 18},
  },
  [MovementType.Push]: {
    [VolumeType.Balanced]: {from: 6, to: 12},
    [VolumeType.Specialization]: {from: 12, to: 16},
  },
  [MovementType.Row]: {
    [VolumeType.Balanced]: {from: 4, to: 8},
    [VolumeType.Specialization]: {from: 10, to: 14},
  },
  [MovementType.Shoulders]: {
    [VolumeType.Balanced]: {from: 6, to: 12},
    [VolumeType.Specialization]: {from: 12, to: 18},
  },
  [MovementType.Curl]: {
    [VolumeType.Balanced]: {from: 2, to: 8},
    [VolumeType.Specialization]: {from: 12, to: 16},
  },
  [MovementType.Extend]: {
    [VolumeType.Balanced]: {from: 2, to: 8},
    [VolumeType.Specialization]: {from: 10, to: 14},
  },
  [MovementType.Abs]: {
    [VolumeType.Balanced]: {from: 4, to: 6},
    [VolumeType.Specialization]: {from: 12, to: 18},
  },
  [MovementType.Calves]: {
    [VolumeType.Balanced]: {from: 2, to: 8},
    [VolumeType.Specialization]: {from: 12, to: 18},
  },
  [MovementType.Forearms]: null
};

const Advanced = {
  [MovementType.Hinge]: {
    [VolumeType.Balanced]: {from: 6, to: 14},
    [VolumeType.Specialization]: {from: 12, to: 22},
  },
  [MovementType.Squat]: {
    [VolumeType.Balanced]: {from: 6, to: 14},
    [VolumeType.Specialization]: {from: 12, to: 22},
  },
  [MovementType.Press]: {
    [VolumeType.Balanced]: {from: 8, to: 10},
    [VolumeType.Specialization]: {from: 12, to: 22},
  },
  [MovementType.Pull]: {
    [VolumeType.Balanced]: {from: 8, to: 16},
    [VolumeType.Specialization]: {from: 16, to: 30},
  },
  [MovementType.Push]: {
    [VolumeType.Balanced]: {from: 8, to: 16},
    [VolumeType.Specialization]: {from: 16, to: 24},
  },
  [MovementType.Row]: {
    [VolumeType.Balanced]: {from: 8, to: 12},
    [VolumeType.Specialization]: {from: 12, to: 22},
  },
  [MovementType.Shoulders]: {
    [VolumeType.Balanced]: {from: 10, to: 18},
    [VolumeType.Specialization]: {from: 16, to: 30},
  },
  [MovementType.Curl]: {
    [VolumeType.Balanced]: {from: 6, to: 12},
    [VolumeType.Specialization]: {from: 16, to: 22},
  },
  [MovementType.Extend]: {
    [VolumeType.Balanced]: {from: 6, to: 12},
    [VolumeType.Specialization]: {from: 16, to: 22},
  },
  [MovementType.Abs]: {
    [VolumeType.Balanced]: {from: 6, to: 14},
    [VolumeType.Specialization]: {from: 16, to: 30},
  },
  [MovementType.Calves]: {
    [VolumeType.Balanced]: {from: 6, to: 12},
    [VolumeType.Specialization]: {from: 16, to: 30},
  },
  [MovementType.Forearms]: null
};

export const WeeklySetsPerMovementType = {
  [ExperienceLevel.Beginner]: Beginner,
  [ExperienceLevel.Intermediate]: Intermediate,
  [ExperienceLevel.Advanced]: Advanced
};