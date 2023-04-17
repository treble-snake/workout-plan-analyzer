import {Alert, Layout, Menu} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './MainLayout.module.css';
import pj from '../../package.json';
import {ThemeSwitch} from './theme/ThemeSwitch';

export const MainLayout = ({children}: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>{'Icebreaker "Bicep"'}</title>
      <meta name="description"
            content="Your little helper in composing and analyzing workout plans for hypertrophy" />
    </Head>
    <Layout className={styles.container}>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.asPath]}
              style={{
                backgroundImage: 'url(/logo-ship-light.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
              }}
              items={[
                {
                  label: <Link href={'/'}>Plans</Link>,
                  key: '/'
                }, {
                  label: <Link href={'/help'}>Help</Link>,
                  key: '/help'
                }, {
                  label: <Link href={'/sources'}>Sources</Link>,
                  key: '/sources'
                },
                {
                  label: <ThemeSwitch />,
                  key: 'dark-mode',
                }
              ]}
        />
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