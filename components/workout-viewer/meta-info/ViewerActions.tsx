import {Divider, Space} from 'antd';
import {useRecoilValue} from 'recoil';
import React from 'react';
import {planTagsSelector} from '../state/workout/WorkoutMetaSelectors';
import {ShareLinkButton} from './action-elements/ShareLinkButton';
import {EditorModeSwitch} from './action-elements/EditorModeSwitch';
import {SavePlanButton} from './action-elements/SavePlanButton';
import {ResetDraftButton} from './action-elements/ResetDraftButton';
import {DeletePlanButton} from './action-elements/DeletePlanButton';

export const ViewerActionsComponent = () => {
  const {isDraft, isDemo, isShared} = useRecoilValue(planTagsSelector);
  console.debug('Viewer Actions render');

  return <>
    <ShareLinkButton />
    <Divider type={'vertical'} />
    {!isDemo &&
      <>
        <Space>
          <SavePlanButton />
          {isDraft && <ResetDraftButton />}
          {!isDraft && !isShared && <DeletePlanButton />}
        </Space>
        <Divider type={'vertical'} />
      </>
    }
    {!isShared &&
      <>
        <EditorModeSwitch />
        <Divider type={'vertical'} />
      </>
    }
  </>;
};

export const ViewerActions = React.memo(ViewerActionsComponent);