import {useRecoilState} from 'recoil';
import {highlightedExercisesState} from '../../state/ViewerConfigState';
import {System} from '../systems-data/SystemsCommon';
import {MuscleGroup} from '../systems-data/MuscleGroupsValues';
import {MovementType} from '../systems-data/MovementTypeValues';
import {Button, Space, Tooltip} from 'antd';
import {BulbTwoTone} from '@ant-design/icons';
import React from 'react';

type Props = {
  system: System,
  unit: MovementType | MuscleGroup
}

export const ToggleHighlightButtonComponent = ({system, unit}: Props) => {
  const [highlight, highlightExercises] = useRecoilState(highlightedExercisesState);

  const highlightColor = (
    highlight && system === highlight.system && unit === highlight.unit
  ) ? '#eba02f' : '#b6b6b6';

  const toggleHighlight = () => {
    if (highlight && system === highlight.system && unit === highlight.unit) {
      highlightExercises(null);
    } else {
      highlightExercises({unit, system});
    }
  };

  return (
    <Tooltip title={'Highlight exercises'}>
      <Button
        onClick={toggleHighlight}
        icon={<BulbTwoTone twoToneColor={highlightColor} />}
      />
    </Tooltip>
  );
};

export const ToggleHighlightButton = React.memo(ToggleHighlightButtonComponent);