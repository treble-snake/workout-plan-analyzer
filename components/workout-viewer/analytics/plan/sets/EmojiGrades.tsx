import styles from './MovementTypeGrades.module.css';
import {Tag} from 'antd';


// TODO: remove emojis?
//
// export const Terrible = () => <span className={styles.grade}
//                                     key={'terrible'}>😱</span>;
// export const Bad = () => <span className={styles.grade} key={'bad'}>👎</span>;
// export const Okay = () => <span className={styles.grade} key={'okay'}>👌</span>;
// export const Good = () => <span className={styles.grade}
//                                 key={'goodBalanced'}>👍</span>;
// export const Great = () => <span className={styles.grade}
//                                  key={'goodSpec'}>💪</span>;
// export const Doubtful = () => <span className={styles.grade}
//                                     key={'doubtful'}>🤔</span>;

export const Ugly = () => <Tag color={'red'}>Ugly</Tag>;
export const Bad = () => <Tag color={'orange'}>Bad</Tag>;
export const Okay = () => <Tag color={'blue'}>OK</Tag>;
export const Good = () => <Tag color={'cyan'}>Good</Tag>;
export const Great = () => <Tag color={'green'}>Great</Tag>;
export const Doubtful = () => <Tag color={'yellow'}>Not sure</Tag>;