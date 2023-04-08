import {useWorkoutContext} from '../../WorkoutProvider';
import {rangeToText} from '../../exercises/RangeUtils';
import {Card, Divider, Row} from 'antd';
import {calculateFrequency} from '../utils/Frequency';
import {calculateWorkingSets} from '../utils/WorkingSets';
import {PlanStatsBySystem} from './PlanStatsBySystem';
import {System} from '../systems-data/SystemsCommon';
import {ExperienceSwitch} from '../../ExperienceSwitch';
import {AnalyticsModeSwitch} from './configs/AnalyticsModeSwitch';
import {lifterExperienceState} from '../../ViewerConfigState';
import {mapObjIndexed} from 'ramda';
import {gradeByMuscleGroup} from '../utils/grades/gradeByMuscleGroup';
import {MuscleGroup} from '../systems-data/MuscleGroupsValues';
import {MovementType} from '../systems-data/MovementTypeValues';
import {gradeByMovementType} from '../utils/grades/gradeByMovementType';
import {useRecoilValue} from 'recoil';

export const PlanAnalytics = () => {
  const {plan} = useWorkoutContext();
  const experience = useRecoilValue(lifterExperienceState);
  console.debug('PlanAnalytics render');

  const {
    freqByMuscleGroup,
    freqByMovementType,
  } = calculateFrequency(plan.days);

  const {
    totalSets,
    setsByMovementType,
    setsByMuscleGroup
  } = calculateWorkingSets(plan.days);

  // TODO: pre-calculate grades with memoization
  const gradedSetsByMuscle = mapObjIndexed(
    (range, muscle) => ({
      range,
      grade: gradeByMuscleGroup({
        muscle: muscle as MuscleGroup,
        sets: range,
        freq: freqByMuscleGroup[muscle],
        level: experience
      })
    }),
    setsByMuscleGroup);

  const gradedSetsByMovement = mapObjIndexed(
    (range, movement) => ({
      range,
      grade: gradeByMovementType({
        movement: movement as MovementType,
        sets: range,
        freq: freqByMuscleGroup[movement],
        level: experience
      })
    }),
    setsByMovementType);

  return (
    <Card title={
      <>
        Workout Analysis
        <Divider type={'vertical'} />
        <ExperienceSwitch />
        <Divider type={'vertical'}/>
        <AnalyticsModeSwitch />
      </>
    }
          size={'small'}
          style={{marginTop: 10}}
    >
      <p>Total sets: {rangeToText(totalSets)}</p>
      {
        totalSets.to > 0 &&
        <Row gutter={8}>
          <PlanStatsBySystem system={System.Muscle}
                             sets={gradedSetsByMuscle}
                             frequency={freqByMuscleGroup} />

          <PlanStatsBySystem system={System.Movement}
                             sets={gradedSetsByMovement}
                             frequency={freqByMovementType} />
        </Row>
      }
    </Card>
  );
};