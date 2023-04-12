import {QtyRange} from '../../../../types/workout';
import {VolumeGrade} from '../utils/grades/Grades';

export type GradedSets = {
  sets: QtyRange,
  grade: VolumeGrade
}