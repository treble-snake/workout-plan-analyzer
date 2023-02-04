import {SaveOutlined} from '@ant-design/icons';
import {Button, message} from 'antd';
import {useWorkoutContext} from '../../WorkoutProvider';
import {useState} from 'react';
import {useRouter} from 'next/router';

export const SavePlanButton = () => {
  const router = useRouter();
  const {plan, saveChanges} = useWorkoutContext();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);
          saveChanges()
            .then((id) => {
              if (plan.isDraft || plan.isShared) {
                return router.push(`/plans/${id}`);
              } else {
                messageApi.success('Successfully saved');
              }
            })
            .catch((e) => {
              messageApi.error('Save failed');
              console.error(e);
            })
            .finally(() => setLoading(false));
        }}
        icon={<SaveOutlined />} type={'primary'} size={'small'}>
        Save
      </Button>
    </>
  );
};