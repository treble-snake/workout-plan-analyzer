import {Descriptions} from 'antd';
import React from 'react';
import {rangeToText} from '../../exercises/RangeUtils';
import {useRecoilValue} from 'recoil';
import {workoutTotalStatsSelector} from '../../state/workout/WorkoutStatsState';
import {workoutPlanLengthSelector} from '../../state/workout/WorkoutPlanState';

export const AnalyticsBasicInfoComponent = () => {
  const {totalSets} = useRecoilValue(workoutTotalStatsSelector);
  const planLength = useRecoilValue(workoutPlanLengthSelector);

  return (
    <Descriptions size="small" column={2} style={{width: 300}}>
      <Descriptions.Item label="Total sets">
        {rangeToText(totalSets)}
      </Descriptions.Item>
      <Descriptions.Item label="Days">
        {planLength}
      </Descriptions.Item>
    </Descriptions>
  );
};

export const AnalyticsBasicInfo = React.memo(AnalyticsBasicInfoComponent);