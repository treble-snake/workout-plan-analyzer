import {MuscleGroup} from './MuscleGroupsValues';
import {BodyPart, System} from './SystemsCommon';
import {MovementType} from './MovementTypeValues';
import React from 'react';
import {LinkOutlined, YoutubeOutlined} from '@ant-design/icons';

type SystemMetaInfo = {
  title: string;
  short: string;
  units: Record<string, string>;
  description?: React.ReactNode
}
export const SystemsMeta: Record<System, SystemMetaInfo> = {
  [System.Muscle]: {
    title: 'Muscle Group',
    short: 'Muscle',
    units: MuscleGroup,
    description: <>
      Based on <a
      target={'_blank'} rel={'noreferrer noopener'}
      href={'https://rpstrength.com/expert-advice/hypertrophy-training-guide-central-hub'}>
      <LinkOutlined /> Training Guide
    </a> by <a
      target={'_blank'} rel={'noreferrer noopener'}
      href={'https://www.youtube.com/c/RenaissancePeriodization'}>
      <YoutubeOutlined/> Renaissance Periodization
      </a>
    </>
  },
  [System.Movement]: {
    title: 'Movement type',
    short: 'Movement',
    units: MovementType,
    description: <>
      Based on <a
      target={'_blank'} rel={'noreferrer noopener'}
      href={'https://www.verityfit.com/product-page/sweat'}>
      <LinkOutlined /> SWEAT
    </a> by <a
      target={'_blank'} rel={'noreferrer noopener'}
      href={'https://www.youtube.com/c/GeoffreyVeritySchofield'}>
      <YoutubeOutlined/> Geoffrey Verity Schofield
    </a>
    </>
  },
  [System.BodyPart]: {
    title: 'Body part',
    short: 'Body part',
    units: BodyPart,
    description: <>I don&apos;t know why I added this 🤷️</>
  }
};