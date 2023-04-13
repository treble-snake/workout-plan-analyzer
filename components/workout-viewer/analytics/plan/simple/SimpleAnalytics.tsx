import {System} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {SystemsMeta} from '../../systems-data/SystemsMeta';
import {
  highlightedExercisesState,
  SimpleViewMode,
  simpleViewModeState
} from '../../../state/ViewerConfigState';
import {VolumeGradeInfo} from './VolumeGradeInfo';
import {VolumeGradeType} from '../../utils/grades/Grades';
import {GradedSets} from '../types';
import {MuscleGroup} from '../../systems-data/MuscleGroupsValues';
import {MovementType} from '../../systems-data/MovementTypeValues';
import React from 'react';
import {useRecoilValue} from 'recoil';

type Props<T> = {
  system: System,
  sets: Record<keyof T, GradedSets>,
  frequency: Record<keyof T, QtyRange>,
}

export const SimpleAnalyticsComponent = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {units} = SystemsMeta[system];
  const simpleViewMode = useRecoilValue(simpleViewModeState);
  const highlighted = useRecoilValue(highlightedExercisesState);

  // TODO: add frequency tips

  return (<>
    {
      Object.values(units)
        .map((it) => ({
          unit: it as (MuscleGroup | MovementType),
          grade: sets[it].grade
        }))
        .filter(({grade, unit}) => {
          if (highlighted && highlighted.system === system && highlighted.unit === unit) {
            return true;
          }

          return simpleViewMode === SimpleViewMode.All || grade.type !== VolumeGradeType.Ok;
        })
        .sort((a, b) => {
          if (a.grade.type !== VolumeGradeType.Ok && b.grade.type !== VolumeGradeType.Ok) {
            return a.grade.confidence > b.grade.confidence ? 1 : -1;
          }

          if (a.grade.type === VolumeGradeType.Ok && b.grade.type === VolumeGradeType.Ok) {
            return a.grade.confidence > b.grade.confidence ? -1 : 1;
          }

          if (a.grade.type !== VolumeGradeType.Ok) {
            return -1;
          }

          if (b.grade.type !== VolumeGradeType.Ok) {
            return 1;
          }

          return 0;
        })
        .map(({unit, grade}) => {
          return (
            <VolumeGradeInfo
              key={`${system}_${unit}_${grade.type}_${grade.confidence}`}
              grade={grade}
              system={system}
              unit={unit}
            />
          );
        })
    }
  </>);
};

export const SimpleAnalytics = SimpleAnalyticsComponent;

export default SimpleAnalytics;