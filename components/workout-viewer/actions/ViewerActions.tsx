import {Divider, Space} from 'antd';
import {ExperienceSwitch} from '../ExperienceSwitch';
import {useWorkoutContext} from '../WorkoutProvider';
import {SavePlanButton} from './elements/SavePlanButton';
import {ResetDraftButton} from './elements/ResetDraftButton';
import {DeletePlanButton} from './elements/DeletePlanButton';
import {EditorModeSwitch} from './elements/EditorModeSwitch';
import {ShareLinkButton} from './elements/ShareLinkButton';

export const ViewerActions = () => {
  const {plan} = useWorkoutContext();

  return <>
    <ShareLinkButton />
    <Divider type={'vertical'} />
    {!plan.isDemo &&
      <>
        <Space>
          <SavePlanButton />
          {plan.isDraft && <ResetDraftButton />}
          {!plan.isDraft && !plan.isShared && <DeletePlanButton />}
        </Space>
        <Divider type={'vertical'} />
      </>
    }
    {!plan.isShared &&
      <>
        <EditorModeSwitch />
        <Divider type={'vertical'} />
      </>
    }
    <ExperienceSwitch />
  </>;
};