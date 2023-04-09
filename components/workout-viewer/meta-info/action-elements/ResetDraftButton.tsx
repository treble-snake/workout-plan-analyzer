import {DeleteOutlined} from '@ant-design/icons';
import {Button, message} from 'antd';
import {useState} from 'react';
import {PlanStorage} from '../../../../api-lib';
import {useSetRecoilState} from 'recoil';
import {workoutPlanState} from '../../state/workout/WorkoutPlanState';

export const ResetDraftButton = () => {
  const [loading, setLoading] = useState(false);
  const setWorkout = useSetRecoilState(workoutPlanState);
  const [messageApi, contextHolder] = message.useMessage();

  // TODO: maybe use SWRMutate instead of this?
  const resetDraft = () => {
    setLoading(true);
    PlanStorage.createPlan()
      .then(setWorkout)
      .catch((e) => {
        messageApi.error('Reset failed');
        console.error(e);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {contextHolder}
      <Button
        loading={loading}
        onClick={resetDraft}
        icon={<DeleteOutlined />} danger size={'small'}>
        Reset
      </Button>
    </>
  );
};