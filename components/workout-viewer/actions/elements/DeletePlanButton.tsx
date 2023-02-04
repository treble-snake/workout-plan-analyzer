import {Button, message} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {useState} from 'react';
import {useWorkoutContext} from '../../WorkoutProvider';
import {useRouter} from 'next/router';

export const DeletePlanButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {deletePlan} = useWorkoutContext();
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);
          deletePlan()
            .then(() => router.push(`/`))
            .catch((e) => {
              messageApi.error('Action failed');
              console.error(e)
            })
            .finally(() => setLoading(false));
        }}
        icon={<DeleteOutlined />} danger size={'small'}>
        Delete
      </Button>
    </>
  );
};