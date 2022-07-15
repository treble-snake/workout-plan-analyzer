import type {NextPage} from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {WorkoutEditor} from '../components/workout-viewer/WorkoutEditor';
import {DempoProgram} from '../components/DemoProgram.tmp.const';
import {WorkoutProvider} from '../components/workout-viewer/WorkoutProvider';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <WorkoutProvider>
          <WorkoutEditor />
        </WorkoutProvider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
