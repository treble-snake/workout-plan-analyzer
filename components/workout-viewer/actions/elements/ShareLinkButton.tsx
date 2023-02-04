import {Typography} from 'antd';
import {useWorkoutContext} from '../../WorkoutProvider';
import {useEffect, useState} from 'react';
import {toBase64} from '../../WorkoutUtils';

export const ShareLinkButton = () => {
  const {plan} = useWorkoutContext();
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