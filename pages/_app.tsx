/** @format */

import type { AppProps } from 'next/app';
import { GlobalStyle } from '@styles/GlobalStyle';
import { Provider } from 'react-redux';
import '@styles/tailwind.css';
import store from 'Redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
