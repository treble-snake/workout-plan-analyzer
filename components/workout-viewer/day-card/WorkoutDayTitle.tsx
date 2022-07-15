import {PlanDay} from '../../../types/workout';
import {useWorkoutContext} from '../WorkoutProvider';
import {Typography} from 'antd';
import {useDayIndexContext} from './WorkoutDayEditor';

const {Paragraph} = Typography;

type Props = {
  day: PlanDay;
}

export const WorkoutDayTitle = ({day}: Props) => {
  const {setDayMetadata} = useWorkoutContext();
  const dayIndex = useDayIndexContext();

  if ('isRest' in day) {
    return <>Rest</>;
  }

  return <Paragraph editable={{
    onChange: (value) => setDayMetadata(dayIndex, {title: value}),
  }}>
    {day.title}
  </Paragraph>;
};