import {Button} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import Link from 'next/link';

export const NewPlanButton = () => {
  return <Link href={'/new-plan'} legacyBehavior>
    <Button icon={<PlusCircleOutlined />} type={'primary'}>
      New plan
    </Button>
  </Link>;
};