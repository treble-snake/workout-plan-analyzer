import {WorkoutDay} from '../../../../types/workout';
import {Collapse, Segmented} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {calculateWorkingSets} from '../utils/WorkingSets';
import {useState} from 'react';
import {DayStatsBySystem} from './DayStatsBySystem';
import {System} from '../systems-data/SystemsCommon';
import {SystemsMeta} from '../systems-data/SystemsMeta';

type Props = {
  day: WorkoutDay;
}

export const WorkoutDayStats = ({day}: Props) => {
  const [system, setSystem] = useState<number | string>(System.Muscle);
  const {
    totalSets, setsByMovementType, setsByMuscleGroup
  } = calculateWorkingSets([day]);

  return (
    <Collapse ghost key={'1'}>
      <Collapse.Panel header={`Total sets: ${rangeToText(totalSets)}`} key="1"
                      style={{textAlign: 'left'}}>

        <Segmented
          options={
            Object.values(System).map((it) => ({
              label: SystemsMeta[it].short, value: it
            }))
          }
          block
          value={system}
          onChange={setSystem}
          size={'small'}
          style={{marginBottom: 10}}
        />

        {
          system === System.Muscle &&
          <DayStatsBySystem system={System.Muscle} sets={setsByMuscleGroup} />
        }
        {
          system === System.Movement &&
          <DayStatsBySystem system={System.Movement}
                            sets={setsByMovementType} />
        }
        </Collapse.Panel>
    </Collapse>
  );
};