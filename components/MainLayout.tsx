import { Layout, Menu } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';

export const MainLayout = ({children}: any) => {
  const router = useRouter();

  return <div>
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
        {children}
      </Layout.Content>
    </Layout>
  </div>;
}