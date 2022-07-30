import React, { ReactNode } from 'react';

import { DefaultOptions, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const customLogger = {
  error: () => {},
  log: () => {},
  warn: () => {}
};

export const mockedQueryClient = new QueryClient({ logger: customLogger });

type Props = {
  defaultOptions?: DefaultOptions;
  children: ReactNode;
};

export const MockReactQueryProvider: React.FC<Props> = ({ children, defaultOptions }) => {
  mockedQueryClient.setDefaultOptions(defaultOptions ?? { queries: { retry: false } });
  return <QueryClientProvider client={mockedQueryClient}>{children}</QueryClientProvider>;
};
