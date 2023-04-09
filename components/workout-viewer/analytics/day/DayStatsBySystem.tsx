import {QtyRange} from '../../../../types/workout';
import {Col, Row} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {System} from '../systems-data/SystemsCommon';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import {useRecoilValue} from 'recoil';
import {workoutDaysStatsSelector} from '../../state/workout/WorkoutStatsState';
import {useDayIdContext} from '../../day-card/WorkoutDayEditor';

type Props<T> = {
  system: System,
}

export const DayStatsBySystem = (props: Props<string>) => {
  console.debug('DayStatsBySystem render', props.system);
  const {system} = props;
  const {short: title, units} = SystemsMeta[system];
  const dayId = useDayIdContext();
  const {
    setsByMovementType,
    setsByMuscleGroup
  } = useRecoilValue(workoutDaysStatsSelector(dayId));
  const sets: Record<string, QtyRange> =
    system === System.Movement ? setsByMovementType : setsByMuscleGroup;

  return (
    <>
      <Row>
        <Col span={18}> <b>By {title}</b></Col>
        <Col span={6}><b>Sets</b></Col>
      </Row>
      {
        Object.values(units)
          .filter(it => sets[it].from > 0)
          .map((it) => {
            return (
              <Row key={it}>
                <Col span={18}>{it}</Col>
                <Col span={6}>{rangeToText(sets[it])}</Col>
              </Row>
            );
          })
      }
    </>
  );
};

export default DayStatsBySystem;