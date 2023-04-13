import {Space, Tag, Typography} from 'antd';
import {PageHeader} from '@ant-design/pro-layout';
import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {viewerEditingModeState, ViewerMode} from '../state/ViewerConfigState';
import {useRouter} from 'next/router';
import {ViewerActions} from './ViewerActions';
import {
  planIsDraftSelector,
  planTitleSelector
} from '../state/workout/WorkoutMetaSelectors';

export const ViewerHeaderComponent = () => {
  const mode = useRecoilValue(viewerEditingModeState);
  const [title, setTitle] = useRecoilState(planTitleSelector);
  const isDraft = useRecoilValue(planIsDraftSelector);
  const router = useRouter();
  const isEditable = mode === ViewerMode.Edit;

  return (
    <PageHeader
      onBack={() => router.push('/')}
      title={
        <Space>
          {isDraft && <Tag>Draft</Tag>}
          <Typography.Text editable={isEditable && {
            onChange: setTitle
          }}
          >
            {title || (isEditable ? <i>Add title</i> : 'Untitled plan')}
          </Typography.Text>
        </Space>
      }
    >
      <ViewerActions />
    </PageHeader>
  );
};

export const ViewerHeader = React.memo(ViewerHeaderComponent);