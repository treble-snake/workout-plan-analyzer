import {Button, Space, Tag, Typography} from 'antd';
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
import {ArrowLeftOutlined} from '@ant-design/icons';

export const ViewerHeaderComponent = () => {
  const mode = useRecoilValue(viewerEditingModeState);
  const [title, setTitle] = useRecoilState(planTitleSelector);
  const isDraft = useRecoilValue(planIsDraftSelector);
  const router = useRouter();
  const isEditable = mode === ViewerMode.Edit;

  return (
    <PageHeader
      backIcon={<Button type={'link'} icon={<ArrowLeftOutlined />}/>}
      onBack={() => router.push('/')}
      title={
        <Space>
          {isDraft && <Tag>Draft</Tag>}
          <Typography.Title level={3} style={{margin: 0}} editable={isEditable && {
            onChange: setTitle
          }}
          >
            {title || (isEditable ? <i>Add title</i> : 'Untitled plan')}
          </Typography.Title>
        </Space>
      }
    >
      <ViewerActions />
    </PageHeader>
  );
};

export const ViewerHeader = React.memo(ViewerHeaderComponent);