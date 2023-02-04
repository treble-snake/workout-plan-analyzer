import {useViewerConfigContext, ViewerMode} from '../../ViewerConfigProvider';
import {Switch} from 'antd';

export const EditorModeSwitch = () => {
  const {setMode, mode} = useViewerConfigContext();

  return (
    <Switch title={'Editor mode'}
            style={{width: 60}}
            onChange={(value) => setMode(value ? ViewerMode.Edit : ViewerMode.View)}
            unCheckedChildren={'View'}
            checkedChildren={'Edit'}
            checked={mode === ViewerMode.Edit}
    />
  );
};