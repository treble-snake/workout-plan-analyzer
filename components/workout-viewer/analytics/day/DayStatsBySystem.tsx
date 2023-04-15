import {Col, Row, Space} from 'antd';
import {rangeToText} from '../../exercises/RangeUtils';
import {System} from '../systems-data/SystemsCommon';
import {SystemsMeta} from '../systems-data/SystemsMeta';
import {useRecoilValue} from 'recoil';
import {workoutDayStatsSelector} from '../../state/workout/WorkoutStatsState';
import {useDayIdContext} from '../../day-card/WorkoutDayEditor';
import {ToggleHighlightButton} from '../plan/ToggleHighlightButton';
import {DailyVolumeWarning} from './DailyVolumeWarning';
import {
  GenericDailySetsPerMuscleGroup
} from '../systems-data/MuscleGroupsValues';
import {lifterExperienceState} from '../../state/ViewerConfigState';

type Props<T> = {
  system: System,
}

export const DayStatsBySystem = (props: Props<string>) => {
  const {system} = props;
  const {short: title, units} = SystemsMeta[system];
  const dayId = useDayIdContext();
  const {warningsBy, setsBy} = useRecoilValue(workoutDayStatsSelector(dayId));
  const experience = useRecoilValue(lifterExperienceState);
  const sets = setsBy[system];
  const warnings = warningsBy[system];

  return (
    <>
      <Row>
        <Col span={18}> <b>By {title}</b></Col>
        <Col span={6}><b>Sets</b></Col>
      </Row>
      {
        Object.values(units)
          .filter((it) => sets[it].from > 0)
          .map((it) => {
            return (
              <Row key={it}>
                <Col span={18}>
                  <Space>
                    <ToggleHighlightButton system={system} unit={it}
                                           buttonProps={{
                                             size: 'small',
                                             type: 'ghost'
                                           }} />
                    <span>{it}</span>
                    <DailyVolumeWarning hasWarning={warnings[it]}
                                        recRange={GenericDailySetsPerMuscleGroup[experience]}
                    />
                  </Space>
                </Col>
                <Col span={6}>{rangeToText(sets[it])}</Col>
              </Row>
            );
          })
      }
    </>
  );
};

export default DayStatsBySystem;