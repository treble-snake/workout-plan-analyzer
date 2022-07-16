import {WorkoutDay} from '../../../types/workout';
import {Collapse} from 'antd';
import {rangeToText} from '../exercises/RangeUtils';
import {flattenWorkload, getTotalSets} from './AnalyticUtils';

type Props = {
  day: WorkoutDay;
}

export const WorkoutDayStats = ({day}: Props) => {
  const range = getTotalSets(flattenWorkload(day.exercises));
  return (
    <Collapse ghost key={'1'}>
      <Collapse.Panel header={`Total sets: ${rangeToText(range)}`} key="1"
                      style={{textAlign: 'left'}}>
        <p>Details will be here</p>
        <p>Quads: 1-2</p>
        <p>Chest: 1-2</p>
      </Collapse.Panel>
    </Collapse>
  );
};