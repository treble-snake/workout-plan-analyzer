import {PageHeader} from '@ant-design/pro-layout';
import {Col, Descriptions, Layout, Row, Space, Tag, Typography} from 'antd';
import {MemoizedWorkoutDayEditor} from './day-card/WorkoutDayEditor';
import {useWorkoutContext} from './WorkoutProvider';
import {AddDays} from './day-card/AddDays';
import {ViewerActions} from './actions/ViewerActions';
import {useViewerConfigContext, ViewerMode} from './ViewerConfigProvider';
import {useRouter} from 'next/router';
import React from 'react';

export const WorkoutEditorComponent = () => {
  const {plan, setMeta} = useWorkoutContext();
  const {mode} = useViewerConfigContext();
  const router = useRouter();

  console.info('WorkoutEditor render');
  // callbacks

  const isEditable = mode === ViewerMode.Edit;

  return <>
    <PageHeader
      onBack={() => router.push('/')}
      title={
        <Space>
          {plan.isDraft && <Tag>Draft</Tag>}
          <Typography.Text editable={isEditable && {
            onChange: (title) => setMeta({title})
          }}
          >
            {plan.title || (isEditable ? <i>Add title</i> : 'Untitled plan')}
          </Typography.Text>
        </Space>
      }
    >
      <ViewerActions />
      <Descriptions size="small" column={1}>
        <Descriptions.Item
          label="Days">{plan.days.length}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
    <Layout.Content className={'plans-content'}>
      <Row gutter={16}>
        {
          plan.days.map((it, i) => (
            <Col
              style={{marginBottom: 16}}
              xs={24}
              sm={12}
              md={12}
              xl={8}
              xxl={6}
              key={i}>
              <MemoizedWorkoutDayEditor index={i} day={it} />
            </Col>
          ))
        }

        {
          isEditable &&
          <Col
            style={{marginBottom: 16}}
            xs={24}
            sm={12}
            md={8}
            xl={4}
            xxl={3}
          >
            <AddDays />
          </Col>
        }
      </Row>
    </Layout.Content>
    <Descriptions>
      <Descriptions.Item label="Recommendations">
        <Typography.Paragraph editable={isEditable && {
          onChange: (recommendations) => setMeta({recommendations}),
        }}>
          {
            plan.recommendations ||
            (isEditable && <i>Add recommendations</i>)
          }
        </Typography.Paragraph>
      </Descriptions.Item>
    </Descriptions>
  </>;
};

export const WorkoutEditor = React.memo(WorkoutEditorComponent, (prevProps, nextProps) => {
  console.info('WorkoutEditor memo');
  console.info('prevProps', prevProps);
  console.info('nextProps', nextProps);
  return false;
});
