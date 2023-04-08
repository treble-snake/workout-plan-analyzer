import {Exercise, QtyRange} from '../../../types/workout';
import {Col, Row, Tooltip, Typography} from 'antd';
import {ExerciseControls} from './ExerciseControls';
import {RangeInput, RangeType} from './RangeInput';
import {useDayIndexContext} from '../day-card/WorkoutDayEditor';
import {useWorkoutContext} from '../WorkoutProvider';
import {
  highlightedExercisesState,
  viewerEditingModeState,
  ViewerMode
} from '../ViewerConfigState';
import React from 'react';
import {isHighlighted} from '../WorkoutUtils';
import {useRecoilValue} from 'recoil';

type Props = {
  exercise: Exercise;
  supersetIndex?: number;
  index: number;
}

export const ExerciseListItem = ({
                                   exercise,
                                   index,
                                   supersetIndex
                                 }: Props) => {
    const dayIndex = useDayIndexContext();
    const {setReps, setSets} = useWorkoutContext();
    const mode = useRecoilValue(viewerEditingModeState);
    const highlight = useRecoilValue(highlightedExercisesState);

    const updateReps = (range: QtyRange) => {
      setReps(range, dayIndex, index, supersetIndex);
    };

    const updateSets = (range: QtyRange) => {
      setSets(range, dayIndex, index, supersetIndex);
    };

    let textStyle: React.CSSProperties = {padding: 0, margin: 0};
    if (isHighlighted(exercise, highlight)) {
      textStyle.color = '#000b3d';
      textStyle.background = 'linear-gradient(90deg, rgba(145,202,255,1) 0%, rgba(145,202,255,0) 90%)';
      textStyle.padding = '0 0 0 5px';
    }

    return <Row>
      <Col span={mode === ViewerMode.Edit ? 14 : 16}
           style={{
             paddingLeft: supersetIndex !== undefined ? 0 : 6,
           }}>
        <Tooltip title={exercise.info.name}>
          <Typography.Paragraph ellipsis style={{...textStyle}}>
            {exercise.info.name}
          </Typography.Paragraph
          >
        </Tooltip>
      </Col>
      <Col span={3} style={{textAlign: 'center', border: '0px dashed black'}}>
        <RangeInput range={exercise.sets} update={updateSets}
                    type={RangeType.Sets} />
      </Col>
      <Col span={5} style={{textAlign: 'center', border: '0px dashed black'}}>
        <RangeInput range={exercise.reps} update={updateReps}
                    type={RangeType.Reps} />
      </Col>

      {
        mode === ViewerMode.Edit &&
        <Col span={2} style={{border: '0px dashed black'}}>
          <ExerciseControls index={index} supersetIndex={supersetIndex} />
        </Col>
      }
    </Row>;
  }
;

