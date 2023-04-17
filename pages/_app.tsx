import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {MainLayout} from '../components/layout/MainLayout';
import {Alert} from 'antd';
import {SWRConfig} from 'swr';
import {localStorageFetcher} from '../api-lib/swr-fetchers/localStorageFetcher';
import {RecoilRoot} from 'recoil';
import React from 'react';
import {ThemeWrapper} from '../components/layout/theme/ThemeWrapper';

function MyApp({Component, pageProps: {session, ...pageProps},}: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig value={{
        fetcher: localStorageFetcher
      }}>
        <ThemeWrapper>
          <MainLayout>
            <Alert.ErrorBoundary>
              <Component {...pageProps} />
            </Alert.ErrorBoundary>
          </MainLayout>
        </ThemeWrapper>
      </SWRConfig>
    </RecoilRoot>
  );
}

export default MyApp;
