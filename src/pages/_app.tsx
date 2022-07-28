import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactElement, ReactNode } from 'react';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '../components/shared/Container';

import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{'Teste - CodeBy'}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
