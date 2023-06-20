import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script'

// declare global {
//   interface Window { dataLayer: any; }
// }

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DDC6WY53TZ"></Script>
          <Script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DDC6WY53TZ');
            `}
          </Script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;600;700;800&family=Red+Hat+Text:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;