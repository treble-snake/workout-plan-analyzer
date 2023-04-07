import {System} from '../../systems-data/SystemsCommon';
import {QtyRange} from '../../../../../types/workout';
import {SystemsMeta} from '../../systems-data/SystemsMeta';
import {
  SimpleViewMode,
  useViewerConfigContext
} from '../../../ViewerConfigProvider';
import {VolumeGradeInfo} from './VolumeGradeInfo';
import {VolumeGradeType} from '../../utils/grades/Grades';
import {GradedSets} from '../types';

type Props<T> = {
  system: System,
  sets: Record<keyof T, GradedSets>,
  frequency: Record<keyof T, QtyRange>,
}

export const SimpleAnalytics = <T extends Record<string, string>>(props: Props<T>) => {
  const {system, sets, frequency} = props;
  const {units} = SystemsMeta[system];
  const {simpleViewMode} = useViewerConfigContext();

  // TODO: add frequency tips

  return (<>
    {
      Object.values(units)
        .map((it) => ({
          unit: it,
          grade: sets[it].grade
        }))
        .filter(({grade}) => {
          return simpleViewMode === SimpleViewMode.All || grade.type !== VolumeGradeType.Ok;
        })
        .sort((a, b) => {
          if (a.grade.type !== VolumeGradeType.Ok && b.grade.type !== VolumeGradeType.Ok) {
            return a.grade.confidence > b.grade.confidence ? -1 : 1;
          }

          if (a.grade.type === VolumeGradeType.Ok && b.grade.type === VolumeGradeType.Ok) {
            return a.grade.confidence > b.grade.confidence ? 1 : -1;
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
          if (simpleViewMode === SimpleViewMode.WarningsOnly && grade.type === VolumeGradeType.Ok) {
            return null;
          }

          return (
            <VolumeGradeInfo key={unit} grade={grade} unit={unit} />
          );
        })
    }
  </>);
};