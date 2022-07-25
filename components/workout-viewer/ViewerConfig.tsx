import {useViewerConfigContext, ViewerMode} from './ViewerConfigProvider';
import {Divider, Segmented, Space, Switch, Tag} from 'antd';
import {ExperienceLevel, System} from './analytics/systems-data/SystemsCommon';
import {SystemsMeta} from './analytics/systems-data/SystemsMeta';
import {ExperienceSwitch} from './ExperienceSwitch';

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
    <ExperienceSwitch/>
  </>;
};