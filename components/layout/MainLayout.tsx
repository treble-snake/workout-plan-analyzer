import {Layout, Menu} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './MainLayout.module.css';

export const MainLayout = ({children}: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>Workout Plan Analyzer</title>
      {/*<meta name="description" content="" />*/}
      {/*<link rel="icon" href="/favicon.ico" />*/}
    </Head>
    <Layout>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.asPath]}>
          <Menu.Item key="/">
            <Link href={'/'}>Plans</Link>
          </Menu.Item>
          <Menu.Item key="/sources">
            <Link href={'/sources'}>Sources</Link>
          </Menu.Item>
          <Menu.Item key="/help">
            <Link href={'/help'}>Help</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>
        <div className={styles.container}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        v{process.env.npm_package_version}
      </Layout.Footer>
    </Layout>
  </>;
};