import { Inter } from '@next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';

import { resetCSS, Colors } from '../theme';

import type { AppProps } from 'next/app';


const inter = Inter({ subsets: ['latin'] });

const GlobalStyle = createGlobalStyle`
${resetCSS}
        * {
          box-sizing: border-box;
        }
        html {
          font-family: ${inter.style.fontFamily};
        }

        html, body {
          background-color: #fff;
        }

        a {
          color: ${Colors.black};
          text-decoration: none;
        }
`;

// eslint-disable-next-line import/no-default-export, prefer-arrow/prefer-arrow-functions
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
