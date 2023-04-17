import {NextPage} from 'next';
import {BulbTwoTone, LinkOutlined, YoutubeOutlined} from '@ant-design/icons';
import React from 'react';
import {List, Typography} from 'antd';
import {PageHeader} from '@ant-design/pro-layout';
import {gold} from '@ant-design/colors';

export const Sources: NextPage = () => {
  return (
    <>
      <PageHeader title={
        <Typography.Title level={3} style={{margin: 0}}>
          Information Sources and Resources
        </Typography.Title>
      } />
      <List itemLayout={'horizontal'}>
        <List.Item>
          <List.Item.Meta
            avatar={<BulbTwoTone twoToneColor={gold.primary} />}
            description={<>
              <a
                target={'_blank'} rel={'noreferrer noopener'}
                href={'https://rpstrength.com/expert-advice/hypertrophy-training-guide-central-hub'}>
                <LinkOutlined /> Training Guide
              </a> by <a
              target={'_blank'} rel={'noreferrer noopener'}
              href={'https://www.youtube.com/c/RenaissancePeriodization'}>
              <YoutubeOutlined /> Renaissance Periodization
            </a>
            </>}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<BulbTwoTone twoToneColor={gold.primary} />}
            description={<>
              <a
                target={'_blank'} rel={'noreferrer noopener'}
                href={'https://www.verityfit.com/product-page/sweat'}>
                <LinkOutlined /> SWEAT
              </a> by <a
              target={'_blank'} rel={'noreferrer noopener'}
              href={'https://www.youtube.com/c/GeoffreyVeritySchofield'}>
              <YoutubeOutlined /> Geoffrey Verity Schofield
            </a>
            </>} />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<BulbTwoTone twoToneColor={gold.primary} />}
            description={<>
              Cat Rest icon:{' '}
              <a target={'_blank'} rel={'noreferrer noopener'}
                 href={'https://www.iconfinder.com/iconsets/cat-force'}>
                <LinkOutlined /> https://www.iconfinder.com/iconsets/cat-force
              </a>
            </>} />
        </List.Item>
      </List>
    </>
  );
};

export default Sources;
