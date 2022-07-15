import {Superset} from '../../../types/workout';
import {ExerciseListItem} from './ExerciseListItem';

type Props = { superset: Superset, index: number };

export const SupersetListItem = ({
                                   superset,
                                   index
                                 }: Props) => {
  return <div style={{borderLeft: '1px solid black', paddingLeft: 5}}>
    {superset.exercises.map((it, i) => (
      <ExerciseListItem exercise={it}
                        index={i}
                        supersetIndex={index}
                        key={i} />
    ))}
  </div>;
};