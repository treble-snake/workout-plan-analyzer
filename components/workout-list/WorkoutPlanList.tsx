import {WorkoutPlan} from '../../types/workout';
import {Button, Card, Col, Empty, Row, Tag} from 'antd';
import Link from 'next/link';

type Props = {
  plans: WorkoutPlan[];
}

export const WorkoutPlanList = ({plans}: Props) => {
  if (plans.length === 0) {
    return <Empty />;
  }

  return <Row gutter={16}>
    {
      plans.map((it) => {
        return (
          <Col
            key={it.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xxl={4}
          >
            <Card title={it.title}
                  style={{marginBottom: 16}}
                  actions={[
                    <Link key={'open'} href={`/plans/${it.id}`}>
                      <Button>Open</Button>
                    </Link>
                  ]
                  }
                  extra={it.isDraft && <Tag>Draft</Tag>}
            >
              <p>{it.shortDescription}</p>
              <p>Days: {it.days.length}</p>
            </Card>
          </Col>
        );
      })
    }
  </Row>;
};