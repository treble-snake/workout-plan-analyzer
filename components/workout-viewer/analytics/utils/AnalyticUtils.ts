import {ExerciseList, QtyRange} from '../../../../types/workout';
import {emptyRange, sumRanges} from '../../exercises/RangeUtils';
import {
  GenericDailySetsPerMuscleGroup,
  MuscleGroup
} from '../systems-data/MuscleGroupsValues';
import {MovementType} from '../systems-data/MovementTypeValues';
import {mapObjIndexed, mergeRight, uniq} from 'ramda';
import {ExperienceLevel, System} from '../systems-data/SystemsCommon';

export function emptyRangeMap<T extends Object>(by: T): Record<keyof T, QtyRange> {
  return Object.values(by).reduce((acc, it) => {
    acc[it] = emptyRange();
    return acc;
  }, {});
}

export const sumAllRanges = <T extends string>(
  rangesA: Record<T, QtyRange>,
  rangesB: Record<T, QtyRange>
) => {
  // get all keys
  return (uniq(Object.keys(rangesA).concat(Object.keys(rangesB))) as T[])
    .reduce((acc, key) => {
      // and add all ranges
      acc[key] = sumRanges(
        rangesA[key] || emptyRange(),
        rangesB[key] || emptyRange()
      );
      return acc;
    }, {} as Record<T, QtyRange>);
};

const calculateDayWarnings = (
  setsByUnit: Record<string, QtyRange>,
  recRange: QtyRange,
) => {
  return Object.keys(setsByUnit).reduce((acc, unit) => {
    const sets = setsByUnit[unit];
    return mergeRight(acc, {
      [unit]: (sets.from > 0 && sets.to > 0) && (
        (sets.from < recRange.from && sets.to < recRange.from) ||
        (sets.from > recRange.to && sets.to > recRange.to) ||
        (sets.to > recRange.to * 1.5)
      )
    });
  }, {} as Record<string, boolean>);
};

export const analyzeDayWorkingSets = (exercises: ExerciseList, experience: ExperienceLevel) => {
  const {
    totalSets,
    setsByMovementType,
    setsByMuscleGroup,
    movementsUsed,
    musclesUsed
  } = exercises.reduce((acc, {info, sets}) => {
    return {
      totalSets: sumRanges(acc.totalSets, sets),
      setsByMovementType: {
        ...acc.setsByMovementType,
        [info.movementType]: sumRanges(acc.setsByMovementType[info.movementType], sets)
      },
      setsByMuscleGroup: {
        ...acc.setsByMuscleGroup,
        [info.muscleGroup]: sumRanges(acc.setsByMuscleGroup[info.muscleGroup], sets)
      },
      musclesUsed: mergeRight(acc.musclesUsed, {[info.muscleGroup]: true}),
      movementsUsed: mergeRight(acc.movementsUsed, {[info.movementType]: true})
    };
  }, {
    totalSets: emptyRange(),
    setsByMovementType: emptyRangeMap(MovementType),
    setsByMuscleGroup: emptyRangeMap(MuscleGroup),
    musclesUsed: {} as Record<MuscleGroup, boolean>,
    movementsUsed: {} as Record<MovementType, boolean>
  });

  const recRange = GenericDailySetsPerMuscleGroup[experience];
  return {
    totalSets,
    setsBy: {
      [System.Muscle]: setsByMuscleGroup as Record<string, QtyRange>,
      [System.Movement]: setsByMovementType as Record<string, QtyRange>
    },
    usedBy: {
      [System.Muscle]: Object.keys(musclesUsed) as MuscleGroup[],
      [System.Movement]: Object.keys(movementsUsed) as MovementType[]
    },
    warningsBy: {
      [System.Muscle]: calculateDayWarnings(setsByMuscleGroup, recRange),
      [System.Movement]: calculateDayWarnings(setsByMovementType, recRange)
    }
  };
};

export const calcWeeklyFrequency = <T extends Object>(planLength: number, timePerWeek: Record<keyof T, number>) => {
  const weeklyRatio = 7 / planLength;
  return mapObjIndexed((num) => {
    const freq = num * weeklyRatio;
    return {from: Math.floor(freq), to: Math.ceil(freq)};
  }, timePerWeek);
};