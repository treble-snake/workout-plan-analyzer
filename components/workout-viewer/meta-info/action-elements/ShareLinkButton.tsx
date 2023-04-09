import {Typography} from 'antd';
import {useEffect, useState} from 'react';
import {toBase64} from '../../WorkoutUtils';
import {useRecoilValue} from 'recoil';
import {workoutPlanState} from '../../state/workout/WorkoutPlanState';

// TODO: use lazy computation !!!
export const ShareLinkButton = () => {
  const plan = useRecoilValue(workoutPlanState);
  const [shareLink, setShareLink] = useState('');

  // TODO: some weird Next.js stuff. Figure out.
  useEffect(() => {
    setShareLink(window.origin + '/shared/' + '#' + toBase64(plan));
  }, [plan]);

  return (
    <Typography.Text
      copyable={{text: shareLink}}
    >
      <b>Copy URL</b>
    </Typography.Text>
  )
}