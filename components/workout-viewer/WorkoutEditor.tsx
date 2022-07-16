import {Col, Descriptions, Layout, PageHeader, Row} from 'antd';
import {WorkoutDayEditor} from './day-card/WorkoutDayEditor';
import {useWorkoutContext} from './WorkoutProvider';
import {AddDays} from './day-card/AddDays';

// type Props = {
//   plan: WorkoutPlan;
// };

export const WorkoutEditor = () => {
  const {plan} = useWorkoutContext();

  return <>
    <PageHeader
      title={plan.title}
      subTitle={plan.shortDescription}
    >
      <Descriptions size="small" column={1}>
        <Descriptions.Item
          label="Days">{plan.days.length}</Descriptions.Item>
        <Descriptions.Item
          label="Info">{plan.fullDescription}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
    <Layout.Content className={'plan-content'}>
      <Row gutter={16}>
        {
          plan.days.map((it, i) => (
            <Col
              style={{marginBottom: 16}}
              span={5} key={i}>
              <WorkoutDayEditor index={i} day={it} />
            </Col>
          ))
        }
        <Col span={3}>
          <AddDays />
        </Col>
      </Row>
    </Layout.Content>
  </>;
};