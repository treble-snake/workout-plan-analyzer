import React from 'react';
import {Tooltip} from 'antd';
import {WarningTwoTone} from '@ant-design/icons';
import {gold} from '@ant-design/colors';
import {QtyRange} from '../../../../types/workout';

type Props = {
  hasWarning: boolean;
  recRange?: QtyRange;
}

const DAY_HINT = 'There might be a suggestion for this day. Check the details for more information.';

export const DailyVolumeWarning = (props: Props) => {
  const {hasWarning} = props;
  if (!hasWarning) {
    return null;
  }

  const hint = props.recRange ?
    `Consider getting into ${props.recRange.from}-${props.recRange.to} sets`
    : DAY_HINT;

  return (
    <Tooltip title={hint}>
      <WarningTwoTone twoToneColor={gold.primary} />
    </Tooltip>
  );
};