/**
 * Per https://rpstrength.com/
 */
import {ExperienceLevel} from './SystemsCommon';

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

const IntermediateAndAdvanced = {
  [MuscleGroup.Quads]: {
    // maxFreq: 6,
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
    // maxFreq: 6,
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
const Beginner = {
  [MuscleGroup.Quads]: {
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
    // maxFreq: 6,
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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
    // maxFreq: 4
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

export const WeeklySetsPerMuscleGroup = {
  [ExperienceLevel.Beginner]: Beginner,
  [ExperienceLevel.Intermediate]: IntermediateAndAdvanced,
  [ExperienceLevel.Advanced]: IntermediateAndAdvanced,
}