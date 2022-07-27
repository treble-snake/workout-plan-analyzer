/**
 * Per https://rpstrength.com/
 */
import {ExperienceLevel} from './SystemsCommon';
import {QtyRange} from '../../../../types/workout';

export enum MuscleGroup {
  Quads = 'Quads',
  Hamstrings = 'Hamstrings',
  Glutes = 'Glutes',
  Back = 'Back',
  Traps = 'Traps',
  Chest = 'Chest',
  FrontDelts = 'FrontDelts',
  SideDelts = 'SideDelts',
  RearDelts = 'RearDelts',
  Triceps = 'Triceps',
  Biceps = 'Biceps',
  Calves = 'Calves',
  Forearms = 'Forearms',
  Abs = 'Abs',
}

export enum VolumeLandmarks {
  /** Maintenance Volume */
  MV = 'MV',
  /**  Minimum Effective Volume */
  MEV = 'MEV',
  /** Maximum Adaptive Volume */
  MAV = 'MAV',
  /** Maximum Recoverable Volume */
  MRV = 'MRV',
}

export const COMMON_SESSION_VOLUME = {from: 4, to: 12}; // For intermediate - advanced ?

type MuscleGroupLandmarks = Record<MuscleGroup, {
  frequency: QtyRange;
  [VolumeLandmarks.MV]: number,
  [VolumeLandmarks.MEV]: number,
  [VolumeLandmarks.MAV]: number,
  [VolumeLandmarks.MRV]: Record<number, number>,
}>

// TODO: add Links to the page
export const RP_URLS = {
  [MuscleGroup.Quads]: 'https://rpstrength.com/expert-advice/quad-size-training-tips',
  [MuscleGroup.Glutes]: 'https://rpstrength.com/glute-training-tips-hypertrophy/',
  [MuscleGroup.Hamstrings]: 'https://rpstrength.com/expert-advice/hamstring-size-training-tips',
  [MuscleGroup.Back]: 'https://rpstrength.com/back-training-tips-hypertrophy/',
  [MuscleGroup.Traps]: 'https://rpstrength.com/trap-training-tips-hypertrophy/',
  [MuscleGroup.Chest]: 'https://rpstrength.com/chest-training-tips-hypertrophy/',
  [MuscleGroup.FrontDelts]: 'https://rpstrength.com/front-delt-training-tips-hypertrophy/',
  [MuscleGroup.SideDelts]: 'https://rpstrength.com/expert-advice/side-delt-size-training-tips',
  [MuscleGroup.RearDelts]: 'https://rpstrength.com/expert-advice/rear-delt-size-training-tips',
  [MuscleGroup.Triceps]: 'https://rpstrength.com/triceps-hypertrophy-training-tips/',
  [MuscleGroup.Biceps]: 'https://rpstrength.com/bicep-training-tips-hypertrophy/',
  [MuscleGroup.Calves]: 'https://rpstrength.com/calves-training-tips-hypertrophy/',
  [MuscleGroup.Forearms]: 'https://rpstrength.com/expert-advice/forearm-growth-training-tips',
  [MuscleGroup.Abs]: 'https://rpstrength.com/ab-training/'
}

const IntermediateAndAdvanced: MuscleGroupLandmarks = {
  [MuscleGroup.Quads]: {
    frequency: {from: 2, to: 5},
    [VolumeLandmarks.MV]: 6,
    [VolumeLandmarks.MEV]: 8,
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 18,
      3: 22,
      4: 26,
      5: 30
    }
  },
  [MuscleGroup.Glutes]: {
    frequency: {from: 2, to: 5},
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0,
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 12,
      3: 18,
      4: 25,
      5: 30
    }
  },
  [MuscleGroup.Hamstrings]: {
    frequency: {from: 2, to: 3},
    [VolumeLandmarks.MV]: 3,
    [VolumeLandmarks.MEV]: 4,
    [VolumeLandmarks.MAV]: 6, // per session
    [VolumeLandmarks.MRV]: {
      1: 6,
      2: 12,
      3: 16,
      4: 18,
      5: 18
    }
  },
  [MuscleGroup.Back]: {
    frequency: {from: 2, to: 4},
    [VolumeLandmarks.MV]: 6,
    [VolumeLandmarks.MEV]: 10,
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 20,
      3: 25,
      4: 30,
      5: 35
    }
  },
  [MuscleGroup.Traps]: {
    frequency: {from: 2, to: 4},
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 20,
      3: 25,
      4: 30,
      5: 35
    }
  },
  [MuscleGroup.Chest]: {
    frequency: {from: 2, to: 4},
    [VolumeLandmarks.MV]: 4,
    [VolumeLandmarks.MEV]: 6, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 20,
      3: 25,
      4: 30,
      5: 35
    }
  },
  [MuscleGroup.FrontDelts]: {
    frequency: {from: 2, to: 3},
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 12,
      3: 16,
      4: 16,
      5: 16
    }
  },
  [MuscleGroup.SideDelts]: {
    frequency: {from: 3, to: 6},
    [VolumeLandmarks.MV]: 6,
    [VolumeLandmarks.MEV]: 8, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 25,
      3: 30,
      4: 35,
      5: 40
    }
  },
  [MuscleGroup.RearDelts]: {
    frequency: {from: 3, to: 6},
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 6, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 18,
      3: 25,
      4: 30,
      5: 35
    }
  },
  [MuscleGroup.Triceps]: {
    frequency: {from: 2, to: 4},
    [VolumeLandmarks.MV]: 4,
    [VolumeLandmarks.MEV]: 6, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 16,
      3: 20,
      4: 25,
      5: 30
    }
  },
  [MuscleGroup.Biceps]: {
    frequency: {from: 3, to: 6},
    [VolumeLandmarks.MV]: 4,
    [VolumeLandmarks.MEV]: 8, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 20,
      3: 25,
      4: 30,
      5: 35
    }
  },
  [MuscleGroup.Calves]: {
    frequency: {from: 3, to: 6},
    [VolumeLandmarks.MV]: 6,
    [VolumeLandmarks.MEV]: 8, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 16,
      3: 20,
      4: 25,
      5: 35
    }
  },
  [MuscleGroup.Forearms]: {
    frequency: {from: 3, to: 6},
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 4, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 12,
      2: 15,
      3: 20,
      4: 25,
      5: 25
    }
  },
  [MuscleGroup.Abs]: {
    frequency: {from: 3, to: 6},
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 4, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 22,
      2: 25,
      3: 25,
      4: 25,
      5: 25
    }
  },
};

// Adding Jeff Nippard Fundamentals
// TODO: check GVS
const Beginner: MuscleGroupLandmarks = {
  [MuscleGroup.Quads]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Quads].frequency,
    [VolumeLandmarks.MV]: 3,
    [VolumeLandmarks.MEV]: 3,
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 10,
      3: 14,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Glutes]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Glutes].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0,
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 10,
      3: 12,
      4: 18,
      5: 20
    }
  },
  [MuscleGroup.Hamstrings]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Hamstrings].frequency,
    [VolumeLandmarks.MV]: 3,
    [VolumeLandmarks.MEV]: 3,
    [VolumeLandmarks.MAV]: 6, // per session
    [VolumeLandmarks.MRV]: {
      1: 4,
      2: 6,
      3: 8,
      4: 10,
      5: 10
    }
  },
  [MuscleGroup.Back]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Back].frequency,
    [VolumeLandmarks.MV]: 3,
    [VolumeLandmarks.MEV]: 4,
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 16,
      3: 20,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Traps]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Traps].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 14,
      3: 18,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Chest]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Chest].frequency,
    [VolumeLandmarks.MV]: 3,
    [VolumeLandmarks.MEV]: 3, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 14,
      3: 18,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.FrontDelts]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.FrontDelts].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 10,
      3: 12,
      4: 12,
      5: 12
    }
  },
  [MuscleGroup.SideDelts]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.SideDelts].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 4, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 15,
      3: 20,
      4: 20,
      5: 25
    }
  },
  [MuscleGroup.RearDelts]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.RearDelts].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 3, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 14,
      3: 18,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Triceps]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Triceps].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 14,
      3: 18,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Biceps]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Biceps].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 16,
      3: 20,
      4: 20,
      5: 25
    }
  },
  [MuscleGroup.Calves]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Calves].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 3, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 14,
      3: 18,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Forearms]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Forearms].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 10,
      2: 12,
      3: 16,
      4: 20,
      5: 20
    }
  },
  [MuscleGroup.Abs]: {
    frequency: IntermediateAndAdvanced[MuscleGroup.Abs].frequency,
    [VolumeLandmarks.MV]: 0,
    [VolumeLandmarks.MEV]: 0, // 4 for advanced ?
    [VolumeLandmarks.MAV]: 12, // per session
    [VolumeLandmarks.MRV]: {
      1: 14,
      2: 18,
      3: 20,
      4: 20,
      5: 25
    }
  },
};

export const WeeklySetsPerMuscleGroup: Record<ExperienceLevel, MuscleGroupLandmarks> = {
  [ExperienceLevel.Beginner]: Beginner,
  [ExperienceLevel.Intermediate]: IntermediateAndAdvanced,
  [ExperienceLevel.Advanced]: IntermediateAndAdvanced,
}