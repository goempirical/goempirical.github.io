import type { AppProps } from 'next/app';
import ConfigContextComponent from 'contexts/global';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigContextComponent>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ConfigContextComponent>
  );
}

export default MyApp;
