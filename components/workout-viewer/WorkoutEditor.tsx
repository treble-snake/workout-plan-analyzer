import {
  Col,
  Descriptions,
  Layout,
  PageHeader,
  Row,
  Space,
  Tag,
  Typography
} from 'antd';
import {MemoizedWorkoutDayEditor} from './day-card/WorkoutDayEditor';
import {useWorkoutContext} from './WorkoutProvider';
import {AddDays} from './day-card/AddDays';
import {ViewerConfig} from './ViewerConfig';
import {useViewerConfigContext, ViewerMode} from './ViewerConfigProvider';

// type Props = {
//   plans: WorkoutPlan;
// };

export const WorkoutEditor = () => {
  const {plan, setMeta} = useWorkoutContext();
  const {mode} = useViewerConfigContext();
  const isEditable = mode === ViewerMode.Edit;

  return <>
    <PageHeader
      onBack={() => window.history.back()}
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
      <ViewerConfig />
      <Descriptions size="small" column={1}>
        <Descriptions.Item
          label="Days">{plan.days.length}</Descriptions.Item>
        <Descriptions.Item label="Info">
          <Typography.Paragraph editable={isEditable && {
            onChange: (fullDescription) => setMeta({fullDescription})
          }}>
            {plan.fullDescription || (isEditable &&
              <i>Add full description</i>)}
          </Typography.Paragraph>
        </Descriptions.Item>
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
  </>;
};