import {WorkoutPlan} from '../../types/workout';
import {Button, Card, Col, Tag} from 'antd';
import Link from 'next/link';

type Props = {
  plan: WorkoutPlan;
}

const PlanTag = ({plan}: Props) => {
  if (plan.isDraft) {
    return <Tag>Draft</Tag>;
  }
  if (plan.isDemo) {
    return <Tag>Demo</Tag>;
  }
  return null;
};

export const WorkoutPlanItem = ({plan}: Props) => {
  return (
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xxl={4}
    >
      <Card title={plan.title}
            style={{marginBottom: 16}}
            actions={[
              <Link key={'open'} href={`/plans/${plan.id}`}
                    legacyBehavior>
                <Button>Open</Button>
              </Link>
            ]}
            extra={<PlanTag plan={plan} />}
      >
        <p>Days: {plan.days.length}</p>
      </Card>
    </Col>
  );
};