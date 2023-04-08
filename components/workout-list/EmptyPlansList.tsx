import {Empty, Space} from 'antd';
import {NewPlanButton} from './NewPlanButton';

export const EmptyPlansList = () => {
  return <Empty description={<Space>
    <span>Create your first working plan!</span>
    <NewPlanButton />
  </Space>
  } />;
}