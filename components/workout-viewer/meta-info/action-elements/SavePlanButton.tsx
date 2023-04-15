import {SaveOutlined} from '@ant-design/icons';
import {Button, message} from 'antd';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useRecoilValue} from 'recoil';
import {workoutPlanState} from '../../state/workout/WorkoutPlanState';
import {PlanStorage} from '../../../../api-lib';

export const SavePlanButton = () => {
  const router = useRouter();
  const plan = useRecoilValue(workoutPlanState);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // TODO: maybe use SWRMutate instead of this?
  const saveChanges = () => {
    setLoading(true);
    PlanStorage.savePlan(plan)
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
  };

  return (
    <>
      {contextHolder}
      <Button
        loading={loading}
        onClick={saveChanges}
        icon={<SaveOutlined />} type={'primary'} size={'small'}>
        Save
      </Button>
    </>
  );
};