import {useWorkoutContext} from '../../WorkoutProvider';
import {rangeToText} from '../../exercises/RangeUtils';
import {Card, Divider, Row} from 'antd';
import {calculateFrequency} from '../utils/Frequency';
import {calculateWorkingSets} from '../utils/WorkingSets';
import {PlanStatsBySystem} from './PlanStatsBySystem';
import {System} from '../systems-data/SystemsCommon';
import {ExperienceSwitch} from '../../ExperienceSwitch';

export const PlanAnalytics = () => {
  const {plan} = useWorkoutContext();
  const {
    freqByMuscleGroup,
    freqByMovementType,
    freqByBodyPart
  } = calculateFrequency(plan);

  const {
    setsByBodyPart,
    totalSets,
    setsByMovementType,
    setsByMuscleGroup
  } = calculateWorkingSets(plan.days);

  return (
    <Card title={
      <>
        Workout Analysis
        <Divider type={'vertical'} />
        <ExperienceSwitch />
      </>
    }
          size={'small'}
          style={{marginTop: 10}}
    >
      <p>Total sets: {rangeToText(totalSets)}</p>
      <Row gutter={8}>
        <PlanStatsBySystem system={System.Muscle}
                           sets={setsByMuscleGroup}
                           frequency={freqByMuscleGroup} />
        <PlanStatsBySystem system={System.Movement}
                           sets={setsByMovementType}
                           frequency={freqByMovementType} />
        <PlanStatsBySystem system={System.BodyPart}
                           sets={setsByBodyPart}
                           frequency={freqByBodyPart} />
      </Row>
    </Card>
  );
};