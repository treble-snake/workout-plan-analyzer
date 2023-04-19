import {Alert, Layout, Space} from 'antd';
import Head from 'next/head';
import styles from './MainLayout.module.css';
import pj from '../../package.json';
import {TopMenu} from './top-menu/TopMenu';
import {HeaderActions} from './top-menu/HeaderActions';

export const MainLayout = ({children}: any) => {
  return <>
    <Head>
      <title>{'Icebreaker "Bicep"'}</title>
      <meta name="description"
            content="The flagship of your gains is here to help you with composing and analyzing workout plans for hypertrophy" />
    </Head>
    <Layout className={styles.container}>
      <Layout.Header>
        <Space style={{justifyContent: 'space-between', width: '100%'}}>
          <TopMenu />
          <HeaderActions />
        </Space>
      </Layout.Header>
      <Layout.Content>
        <Alert type={'warning'}
               banner
               message={'This is an early alpha version, things might break or change dramatically.'} />
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