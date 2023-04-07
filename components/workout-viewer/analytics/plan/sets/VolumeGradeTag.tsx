import {Bad, Doubtful, Good, Great, Okay} from './EmojiGrades';
import {
  ConfidenceLevel,
  VolumeGrade,
  VolumeGradeType
} from '../../utils/grades/Grades';

type Props = {
  grade: VolumeGrade
}

// TODO: add clarifications
export const VolumeGradeTag = ({
                                 grade
                               }: Props) => {
  if (grade.type == VolumeGradeType.Uncertain) {
    return <Doubtful />;
  }

  if (grade.type === VolumeGradeType.Ok) {
    return grade.confidence === ConfidenceLevel.High ? <Great /> : <Good />;
  }

  if (grade.type === VolumeGradeType.NoInfo) {
    return null;
  }

  // all bad stuff
  if (grade.confidence === ConfidenceLevel.Low) {
    return <Okay />;
  }

  if (grade.confidence === ConfidenceLevel.High) {
    return <Bad />;
  }

  return <Bad />;
};