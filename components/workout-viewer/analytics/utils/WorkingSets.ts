import {ExerciseList, QtyRange} from '../../../../types/workout';
import {emptyRange, sumRanges} from '../../exercises/RangeUtils';
import {MuscleGroup} from '../systems-data/MuscleGroupsValues';
import {MovementType} from '../systems-data/MovementTypeValues';
import {mapObjIndexed, mergeRight, uniq} from 'ramda';

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

export const calculateWorkingSetsV3 = (exercises: ExerciseList) => {
  console.time('calculateWorkingSets_v3');

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

  console.timeEnd('calculateWorkingSets_v3');
  return {
    totalSets,
    setsByMovementType,
    setsByMuscleGroup,
    musclesUsed: Object.keys(musclesUsed) as MuscleGroup[],
    movementsUsed: Object.keys(movementsUsed) as MovementType[]
  };
};

export const calcWeeklyFrequency = <T extends Object>(planLength: number, timePerWeek: Record<keyof T, number>) => {
  const weeklyRatio = 7 / planLength;
  return mapObjIndexed((num) => {
    const freq = num * weeklyRatio;
    return {from: Math.floor(freq), to: Math.ceil(freq)};
  }, timePerWeek);
};