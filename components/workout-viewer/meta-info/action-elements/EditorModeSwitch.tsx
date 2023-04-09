import {viewerEditingModeState, ViewerMode} from '../../state/ViewerConfigState';
import {Switch} from 'antd';
import {useRecoilState} from 'recoil';

export const EditorModeSwitch = () => {
  const [mode, setMode] = useRecoilState(viewerEditingModeState);

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