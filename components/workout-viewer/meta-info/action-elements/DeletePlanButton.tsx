import {Button, message, Popconfirm} from 'antd';
import {DeleteOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {PlanStorage} from '../../../../api-lib';
import {useRecoilValue} from 'recoil';
import {planIdSelector} from '../../state/workout/WorkoutMetaSelectors';

export const DeletePlanButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const planId = useRecoilValue(planIdSelector);
  const [messageApi, contextHolder] = message.useMessage();

  // TODO: maybe use SWRMutate instead of this?
  const deletePlan = () => {
    setLoading(true);
    PlanStorage.deletePlan(planId)
      .then(() => router.push(`/`))
      .catch((e) => {
        messageApi.error('Action failed');
        console.error(e);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {contextHolder}
      <Popconfirm title="Are you sure？" okText="Yes" cancelText="No"
                  icon={<QuestionCircleOutlined style={{color: 'red'}} />}
                  onConfirm={deletePlan}
      >
        <Button
          loading={loading}
          icon={<DeleteOutlined />} danger size={'small'}>
          Delete
        </Button>
      </Popconfirm>
    </>
  );
};