import styles from './MovementTypeGrades.module.css';

export const Terrible = () => <span className={styles.grade}
                                    key={'terrible'}>😱</span>;
export const Bad = () => <span className={styles.grade} key={'bad'}>👎</span>;
export const Okay = () => <span className={styles.grade} key={'okay'}>👌</span>;
export const Good = () => <span className={styles.grade}
                                key={'goodBalanced'}>👍</span>;
export const Great = () => <span className={styles.grade}
                                 key={'goodSpec'}>💪</span>;
export const Doubtful = () => <span className={styles.grade}
                                    key={'doubtful'}>🤔</span>;