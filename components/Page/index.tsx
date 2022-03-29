import Head from 'next/head';

import { IPageProps } from './types';

function Page({ children, config, siteName }: IPageProps) {
  return (
    <>
      <Head>
        <title>{config.title || 'Empirical'}</title>
        {config?.description && <meta name="description" content={config?.description} />}
        <meta property="og:image" content={config.socialMediaImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="siteName" />
        <meta property="og:title" content={config.title} key="ogtitle" />
        {config?.description && <meta property="og:description" content={config?.description} key="ogdesc" />}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#080c1f" />
        <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#080c1f" />
        <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#080c1f" />
      </Head>
      {children}
    </>
  );
}

Page.defaultProps = {
  siteName: 'Empirical',
};

export default Page;
