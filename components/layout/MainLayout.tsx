import {Alert, Layout, Menu} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './MainLayout.module.css';
import pj from '../../package.json';

export const MainLayout = ({children}: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>Workout Plan Analyzer</title>
      {/*<meta name="description" content="" />*/}
      {/*<link rel="icon" href="/favicon.ico" />*/}
    </Head>
    <Layout className={styles.container}>
      <Alert type={'warning'}
             banner
             message={'This is an early alpha version, things might break or change dramatically.'} />
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.asPath]}
              items={[
                {
                  label: <Link href={'/'}>Plans</Link>,
                  key: '/'
                }, {
                  label: <Link href={'/sources'}>Sources</Link>,
                  key: '/sources'
                }, {
                  label: <Link href={'/help'}>Help</Link>,
                  key: '/help'
                },
              ]}
        />
      </Layout.Header>
      <Layout.Content>
        <main className={styles.main}>
          {children}
        </main>
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        Version {pj.version} &copy; S.R.M.S.
      </Layout.Footer>
    </Layout>
  </>;
};