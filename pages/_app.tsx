import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {MainLayout} from '../components/layout/MainLayout';
import {Alert} from 'antd';
import {SWRConfig} from 'swr';
import {localStorageFetcher} from '../api-lib/swr-fetchers/localStorageFetcher';

function MyApp({Component, pageProps}: AppProps) {
  return <SWRConfig value={{
    fetcher: localStorageFetcher
  }}>
    <MainLayout>
      <Alert.ErrorBoundary>
        <Component {...pageProps} />
      </Alert.ErrorBoundary>
    </MainLayout>
  </SWRConfig>;
}

export default MyApp;
