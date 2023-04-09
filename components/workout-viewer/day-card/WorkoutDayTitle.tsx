import {Typography} from 'antd';
import {viewerEditingModeState, ViewerMode} from '../state/ViewerConfigState';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import React from 'react';
import {workoutDayById} from '../state/workout/WorkoutPlanState';

const {Paragraph} = Typography;

type Props = {
  id: string;
  title: string | undefined;
  isRest: boolean;
}

export const WorkoutDayTitleComponent = ({isRest, title, id}: Props) => {
  const mode = useRecoilValue(viewerEditingModeState);
  const setDay = useSetRecoilState(workoutDayById(id));
  const updateTitle = (title: string) => setDay((day) => {
    return {...day, title};
  });

  const compiledTitle = title || (isRest ? 'Rest Day' : 'Workout Day');
  return <Paragraph
    style={{margin: 0}}
    editable={mode === ViewerMode.View ? false : {
      onChange: updateTitle
    }}>
    {compiledTitle}
  </Paragraph>;
};

export const WorkoutDayTitle = React.memo(WorkoutDayTitleComponent);