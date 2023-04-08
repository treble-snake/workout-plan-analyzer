import {NextPage} from 'next';
import React from 'react';
import {Typography} from 'antd';

export const Sources: NextPage = () => {
  return (<>
      <Typography.Paragraph style={{marginTop: 20}}>
        Sorry, Work in Progress.
      </Typography.Paragraph>
      <Typography.Paragraph>
        In case of questions or suggestions, get in touch on{' '}
        <a href={'https://github.com/treble-snake/workout-plan-analyzer'}
           rel={'noopener noreferrer'} target={'_blank'}>GitHub</a>
      </Typography.Paragraph>
    </>
  );
};

export default Sources;
