import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const gtag = 'https://www.googletagmanager.com/gtag/js?id=G-DDC6WY53TZ';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          { /* Google Analytics Measurement ID */}
          <script async src={gtag} />
          { /* Inject the GA tracking code with the Measurement ID */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DDC6WY53TZ', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
          <meta name="image" property="og:image" content="https://drive.google.com/uc?export=view&id=1OsVePjy4gOfibIAnGz7OdB-32M7FVqRp" />
          <meta name="author" content="Empirical LLC" />
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
