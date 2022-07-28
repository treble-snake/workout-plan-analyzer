import {NextPage} from 'next';
import {LinkOutlined, YoutubeOutlined} from '@ant-design/icons';
import React from 'react';

export const Sources: NextPage = () => {
  return (
    <ul style={{marginTop: 20}}>
      <li>
        <a
          target={'_blank'} rel={'noreferrer noopener'}
          href={'https://rpstrength.com/expert-advice/hypertrophy-training-guide-central-hub'}>
          <LinkOutlined /> Training Guide
        </a> by <a
        target={'_blank'} rel={'noreferrer noopener'}
        href={'https://www.youtube.com/c/RenaissancePeriodization'}>
        <YoutubeOutlined /> Renaissance Periodization
      </a>
      </li>
      <li>
        <a
          target={'_blank'} rel={'noreferrer noopener'}
          href={'https://www.verityfit.com/product-page/sweat'}>
          <LinkOutlined /> SWEAT
        </a> by <a
        target={'_blank'} rel={'noreferrer noopener'}
        href={'https://www.youtube.com/c/GeoffreyVeritySchofield'}>
        <YoutubeOutlined /> Geoffrey Verity Schofield
      </a>
      </li>
      <li>
        Cat Rest icon:{' '}
        <a target={'_blank'} rel={'noreferrer noopener'}
           href={'https://www.iconfinder.com/iconsets/cat-force'}>
          <LinkOutlined /> https://www.iconfinder.com/iconsets/cat-force
        </a>
      </li>
    </ul>
  );
};

export default Sources;
