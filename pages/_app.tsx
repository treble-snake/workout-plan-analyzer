import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {MainLayout} from '../components/layout/MainLayout';
import {Alert} from 'antd';

function MyApp({Component, pageProps}: AppProps) {
  return <MainLayout>
    <Alert.ErrorBoundary>
      <Component {...pageProps} />
    </Alert.ErrorBoundary>
  </MainLayout>;
}

export default MyApp;
