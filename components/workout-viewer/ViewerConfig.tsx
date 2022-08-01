import {useViewerConfigContext, ViewerMode} from './ViewerConfigProvider';
import {Divider, Switch, Typography} from 'antd';
import {ExperienceSwitch} from './ExperienceSwitch';
import {useWorkoutContext} from './WorkoutProvider';
import {toBase64} from './WorkoutUtils';
import {useEffect, useState} from 'react';

export const ViewerConfig = () => {
  const {setMode, mode} = useViewerConfigContext();
  const {plan} = useWorkoutContext();
  const [shareLink, setShareLink] = useState('');

  // TODO: some weird Next.js stuff. Figure out.
  useEffect(() => {
    setShareLink(window.origin + '/shared/' + '#' + toBase64(plan));
  }, [plan]);

  return <>
    <Typography.Text
      copyable={{text: shareLink}}
    >
      <b>Copy URL</b>
    </Typography.Text>
    <Divider type={'vertical'} />
    <Switch title={'Editor mode'}
            style={{width: 60}}
            onChange={(value) => setMode(value ? ViewerMode.Edit : ViewerMode.View)}
            unCheckedChildren={'View'}
            checkedChildren={'Edit'}
            checked={mode === ViewerMode.Edit}
    />
    <Divider type={'vertical'} />
    <ExperienceSwitch />
  </>;
};