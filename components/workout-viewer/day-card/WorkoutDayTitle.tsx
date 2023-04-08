import {PlanDay} from '../../../types/workout';
import {useWorkoutContext} from '../WorkoutProvider';
import {Typography} from 'antd';
import {useDayIndexContext} from './WorkoutDayEditor';
import {viewerEditingModeState, ViewerMode} from '../ViewerConfigState';
import {useRecoilValue} from 'recoil';

const {Paragraph} = Typography;

type Props = {
  day: PlanDay;
}

export const WorkoutDayTitle = ({day}: Props) => {
  const {setDayMetadata} = useWorkoutContext();
  // const {mode} = useViewerConfigContext();
  const mode = useRecoilValue(viewerEditingModeState);
  const dayIndex = useDayIndexContext();

  const defaultTitle = 'isRest' in day ? 'Rest' : `Day ${dayIndex + 1}`;
  return <Paragraph
    style={{margin: 0}}
    editable={mode === ViewerMode.View ? false : {
    onChange: (value) => setDayMetadata(dayIndex, {title: value}),
  }}>
    {day.title || defaultTitle}
  </Paragraph>;
};