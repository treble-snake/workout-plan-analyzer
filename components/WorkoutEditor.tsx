import {PlanDay, RestDay, WorkoutDay, WorkoutPlan} from '../types/workout';
import {Card, Col, Descriptions, Layout, PageHeader, Row} from 'antd';

type Props = {
  plan: WorkoutPlan;
};

export const stronglifts: WorkoutPlan = {
  title: '5 x 5 Stronglifts',
  description: 'Good plan for beginners',
  microCycleDays: 4,
  days: [
    {
      title: 'Day A',
      exercises: []
    },
    {isRest: true},
    {
      title: 'Day B',
      exercises: []
    },
    {isRest: true}
  ]
};

export const RestDayComponent = ({i}: {i: number}) => {
  return <Col span={6}>
    <Card title={`Day ${i} - Rest`}></Card>
  </Col>;
};

export const WorkoutDayEditor = ({day, i}: { day: PlanDay, i: number }) => {
  if ('isRest' in day) {
    return <RestDayComponent i={i} />;
  }


  return <Col span={6}>
    <Card title={day.title || `Day ${i}`}>

  </Card>
  </Col>;
};

export const AddDay = () => {
  return <Col span={6}>
    <Card title={'Add day'}>

    </Card>
  </Col>;
};

export const WorkoutEditor = ({plan}: Props) => {
  return <>
    <PageHeader
      title={plan.title}
      subTitle={plan.description}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item
          label="Days">{plan.microCycleDays}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
    <Layout.Content>
      <Row gutter={16}>

      {plan.days.map((it, index) => <WorkoutDayEditor key={index} i={index + 1} day={it} />) }
      <AddDay/>
      </Row>
    </Layout.Content>
  </>;
};