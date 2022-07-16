import {useWorkoutContext} from '../WorkoutProvider';
import {flattenWorkload, getTotalSets} from './AnalyticUtils';
import {rangeToText} from '../exercises/RangeUtils';
import {Card, Col, Row, Segmented} from 'antd';
import {useState} from 'react';
import {BodyPart, MovementType, MuscleGroup} from '../../../types/exercise';

export const WorkoutAnalytics = () => {
  const [system, setSystem] = useState<string | number>('muscle');
  const {plan} = useWorkoutContext();
  const exercises = flattenWorkload(plan.days
    .flatMap((it) => 'isRest' in it ? [] : it.exercises)
  );

  return (
    <Card title={'Workout Analysis'}
          size={'small'}
          // extra={<Segmented
          //   options={[
          //     {label: 'Muscle group', value: 'muscle'},
          //     {label: 'Movement type', value: 'movement'},
          //     {label: 'Body part', value: 'bodypart'},
          //   ]}
          //   value={system}
          //   onChange={(value) => setSystem(value)}
          // />}
    >
      <p>Total sets: {rangeToText(getTotalSets(exercises))}</p>
      <Row gutter={8}>
        <Col span={8}>
          <b>By Muscle Group</b>
          <p>Brief info about Muscle group system (RP).</p>
          <Row>
            <Col span={6} offset={12}><b>Sets</b></Col>
            <Col span={6}><b>Freq</b></Col>
          </Row>
          {
            Object.values(MuscleGroup).map((it) => {
              return (
                <Row key={it}>
                  <Col span={12}>{it}</Col>
                  <Col span={6}>6-12</Col>
                  <Col span={6}>2</Col>
                </Row>
              );
            })
          }
        </Col>
        <Col span={8}>
          <b>By Movement Type</b>
          <p>Brief info about Movement types (GVS).</p>
          <Row>
            <Col span={6} offset={12}><b>Sets</b></Col>
            <Col span={6}><b>Freq</b></Col>
          </Row>
          {
            Object.values(MovementType).map((it) => {
              return (
                <Row key={it}>
                  <Col span={12}>{it}</Col>
                  <Col span={6}>6-12</Col>
                  <Col span={6}>2</Col>
                </Row>
              );
            })
          }
        </Col>
        <Col span={8}>
          <b>By Body Part</b>
          <p>Brief info about Body parts.</p>
          <Row>
            <Col span={6} offset={12}><b>Sets</b></Col>
            <Col span={6}><b>Freq</b></Col>
          </Row>
          {
            Object.values(BodyPart).map((it) => {
              return (
                <Row key={it}>
                  <Col span={12}>{it}</Col>
                  <Col span={6}>6-12</Col>
                  <Col span={6}>2</Col>
                </Row>
              );
            })
          }
        </Col>
      </Row>
    </Card>
  )
};