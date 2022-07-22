import {useViewerConfigContext, ViewerMode} from './ViewerConfigProvider';
import {Divider, Segmented, Space, Switch, Tag} from 'antd';
import {ExperienceLevel, System, SystemsMeta} from './analytics/Systems';

export const ViewerConfig = () => {
  const {setMode, mode, experience, setExperience} = useViewerConfigContext();

  return <>
    <Tag>Editor Mode</Tag>
    <Switch title={'Editor mode'}
            style={{width: 60}}
            onChange={(value) => setMode(value ? ViewerMode.Edit : ViewerMode.View)}
            unCheckedChildren={'View'}
            checkedChildren={'Edit'}
            checked={mode === ViewerMode.Edit}
    />
    <Divider type={'vertical'} />
    <Tag>Experience level</Tag>
    <Segmented
      value={experience}
      onChange={(value) => setExperience(value as ExperienceLevel)}
      size={'small'}
      options={Object.values(ExperienceLevel).map((it) => ({
      label: it, value: it
    }))} />

  </>;
};