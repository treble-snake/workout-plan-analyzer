import {Exercise, QtyRange} from '../../../types/workout';
import {Col, Row, Tooltip, Typography} from 'antd';
import {ExerciseControls} from './ExerciseControls';
import {RangeInput, RangeType} from './RangeInput';
import {useDayIdContext} from '../day-card/WorkoutDayEditor';
import {
  highlightedExercisesState,
  viewerEditingModeState,
  ViewerMode
} from '../state/ViewerConfigState';
import React, {memo} from 'react';
import {isHighlighted} from '../WorkoutUtils';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {workoutDayExercisesSelector} from '../state/workout/WorkoutPlanState';
import {mergeRight, update} from 'ramda';

type Props = {
  exercise: Exercise;
  index: number;
}

export const ExerciseListItemComponent = ({
                                            exercise,
                                            index,
                                          }: Props) => {
    console.debug('Exercise List Item render', exercise.info.name);

    const dayId = useDayIdContext();
    const mode = useRecoilValue(viewerEditingModeState);
    const highlight = useRecoilValue(highlightedExercisesState);
    const setExercises = useSetRecoilState(workoutDayExercisesSelector(dayId));
    const updateExercise = (patch: Partial<Exercise>) => {
      setExercises((current) =>
        update(index, mergeRight(current[index], patch), current));
    };

    // TODO: important - use debounce
    const updateReps = (range: QtyRange) => updateExercise({reps: range});
    const updateSets = (range: QtyRange) => updateExercise({sets: range});

    let textStyle: React.CSSProperties = {padding: 0, margin: 0};
    if (isHighlighted(exercise, highlight)) {
      textStyle.color = '#000b3d';
      textStyle.background = 'linear-gradient(90deg, rgba(145,202,255,1) 0%, rgba(145,202,255,0) 90%)';
      textStyle.padding = '0 0 0 5px';
    }

    return <Row>
      <Col span={mode === ViewerMode.Edit ? 14 : 16}>
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
        <ExerciseControls index={index} />
      }
    </Row>;
  }
;

export const ExerciseListItem = memo(ExerciseListItemComponent);