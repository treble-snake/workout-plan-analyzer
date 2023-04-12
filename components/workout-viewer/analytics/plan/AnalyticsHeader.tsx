import {Divider} from 'antd';
import {ExperienceSwitch} from '../ExperienceSwitch';
import {AnalyticsModeSwitch} from './configs/AnalyticsModeSwitch';
import React from 'react';

export const AnalyticsHeaderComponent = () => {
  return (
    <>
      Workout Analysis
      <Divider type={'vertical'} />
      <ExperienceSwitch />
      <Divider type={'vertical'} />
      <AnalyticsModeSwitch />
    </>
  );
};

export const AnalyticsHeader = React.memo(AnalyticsHeaderComponent);