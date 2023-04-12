import {useDayIdContext} from '../../day-card/WorkoutDayEditor';
import {useRecoilValue} from 'recoil';
import {workoutDayStatsSelector} from '../../state/workout/WorkoutStatsState';
import {rangeToText} from '../../exercises/RangeUtils';
import {memo} from 'react';

export const TotalDaySetsComponent = () => {
  const dayId = useDayIdContext();
  const {totalSets} = useRecoilValue(workoutDayStatsSelector(dayId));
  return (
    <span>Total sets: {rangeToText(totalSets)}</span>
  );
};

export const TotalDaySets = memo(TotalDaySetsComponent);
export default TotalDaySets;