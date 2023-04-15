import {useDayIdContext} from '../../day-card/WorkoutDayEditor';
import {useRecoilValue} from 'recoil';
import {
  workoutDayHasWarningsSelector,
  workoutDayStatsSelector
} from '../../state/workout/WorkoutStatsState';
import {rangeToText} from '../../exercises/RangeUtils';
import {memo} from 'react';
import {DailyVolumeWarning} from './DailyVolumeWarning';
import {Space} from 'antd';

export const TotalDaySetsComponent = () => {
  const dayId = useDayIdContext();
  const {totalSets} = useRecoilValue(workoutDayStatsSelector(dayId));
  const hasWarnings = useRecoilValue(workoutDayHasWarningsSelector(dayId));
  return (
    <Space>
      <span>Total sets: {rangeToText(totalSets)}</span>
      <DailyVolumeWarning hasWarning={hasWarnings} />
    </Space>
  );
};

export const TotalDaySets = memo(TotalDaySetsComponent);
export default TotalDaySets;