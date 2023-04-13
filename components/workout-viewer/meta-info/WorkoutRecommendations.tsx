import {Descriptions, Typography} from 'antd';
import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {viewerEditingModeState, ViewerMode} from '../state/ViewerConfigState';

import {
  planRecommendationsSelector
} from '../state/workout/WorkoutMetaSelectors';

export const WorkoutRecommendationsComponent = () => {
  const [recommendations, setRecommendations] = useRecoilState(planRecommendationsSelector);
  const mode = useRecoilValue(viewerEditingModeState);
  const isEditable = mode === ViewerMode.Edit;

  return (
    <Descriptions>
      <Descriptions.Item label="Recommendations">
        <Typography.Paragraph editable={isEditable && {
          onChange: setRecommendations,
        }}>
          {
            recommendations ||
            (isEditable && <i>Add recommendations</i>)
          }
        </Typography.Paragraph>
      </Descriptions.Item>
    </Descriptions>
  );
};

export const WorkoutRecommendations = React.memo(WorkoutRecommendationsComponent);