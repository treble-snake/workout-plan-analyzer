import {DeleteOutlined} from '@ant-design/icons';
import {Button, message} from 'antd';
import {useState} from 'react';
import {useWorkoutContext} from '../../WorkoutProvider';

export const ResetDraftButton = () => {
  const [loading, setLoading] = useState(false);
  const {resetDraft} = useWorkoutContext();
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);
          resetDraft()
            .catch((e) => {
              messageApi.error('Reset failed');
              console.error(e);
            })
            .finally(() => setLoading(false));
        }}
        icon={<DeleteOutlined />} danger size={'small'}>
        Reset
      </Button>
    </>
  );
};