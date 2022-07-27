import {ExperienceLevel} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {
  MovementType,
  WeeklySetsPerMovementType
} from '../../systems-data/MovementTypeValues';
import {isInRange} from '../../../exercises/RangeUtils';
import {
  Bad,
  Doubtful,
  Good,
  Great,
  Okay,
  Ugly
} from './EmojiGrades';

type Props = {
  level: ExperienceLevel;
  movement: MovementType;
  sets: QtyRange;
}

export const MovementTypeTotalSetsGrade = ({
                                        movement,
                                        level,
                                        sets: {from, to}
                                      }: Props) => {
  const {
    Balanced: balanced,
    Specialization: spec
  } = WeeklySetsPerMovementType[level][movement];

  // TODO: make indirect work affect 0 sets
  // TODO: count how many specialization sets are there
  // TODO: indicate balanced and spec ranges??

  if (balanced.from + balanced.to + spec.from + spec.to === 0) {
    return null;
  }

  if (from > spec.to) {
    return from > spec.to || to > spec.to * 1.5 ? <Ugly /> : <Doubtful />;
  }

  if (to > spec.to) {
    return from > spec.to * 1.5 ? <Bad /> : <Doubtful />;
  }

  if (from < balanced.from && to < balanced.from) {
    return <Bad />;
  }

  if (from < balanced.from && isInRange(to, balanced)) {
    return <Okay />;
  }

  if (from >= balanced.from && from <= spec.from) {
    return isInRange(to, balanced) ? <Great/> : <Good />;
  }

  if (isInRange(to, spec)) {
    return <Great />;
  }

  return <Doubtful />;
};