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
          <meta name="image" property="og:image" content="https://doc-10-24-docs.googleusercontent.com/docs/securesc/ue9fseerdfo4d5t01mmok345up3rlb6r/1tps0taurjvhkg5irtps6sigqornbu2d/1702499475000/00933564721808759391/01253419403402184580/1OsVePjy4gOfibIAnGz7OdB-32M7FVqRp?e=view&ax=AEqgLxmokfLpDjpeXF_HeqVTjADr2Xr2QPl5J33SjGDQDlqemLBB2qZ7pvchWL0RiQElpU4imvS5PFzZgSgf8fapH-g8zPLDXNWMT5At_Hq4MJKK582aPABjQzMjO7LURMnCSrvG8OJ9dAIa_VNrvIX09vgrw4Z4mppsOwzZ9zi-aEcLiszaPQIt6wbbJYV2vmtuZ9snaR7iOqGGDK_7nSyK3o57R8_pDy6wQzAptYckou1NsSX0HDMyHYcDP3xD4zlP7hoK12tjSKHGNo02H6S4yw2r89MYfRuFovWCHmM7Ast4lae0PLfA5mifmy3gulqIoaP-BE-l9qwGX5F6fEnS9uOc_TtYWlRDgCW0I9yTOFOtPKj4pBsYE8HZih7QsH2_QasjPQRrAEuiXZpJ2du7FY0wngu8RkpMWw42XpgHYBBu6fVK8m_Tqsqqfayv05VMY7LFhS3W_yI9YNIryjSPp8ebJtuL0Fg3-e-uoRneA24dsFqmtjlbnHPH-P1KuqhA3sj_CK3km6ElM-4ihtbnq06XwuFIdoDPxqQLPqNhR4R13dvVJBAFXaFlTFaWZ5XIrgcj_tdLoaIMassEqqzkYA6PP2AJclYOpBH8qUAwOQbnTTci5GcpHQTkeJJMJ1KJYTXQ5lCmnWvSUpULqwojvo11V_-Cx1mkk9RsXKhYqKTqE8AuzDXiA6RN1sWohjGPDwxVgFmpFtOtOv5HoKHbjy7AbBRsZZSfPoFiqEOTgUNTzCmh2LrYjNA_9Xw8PYeym56WQLLZb6b_Qs9O8WzebCDiQLsjx0v-jg3INokPWx5X9FpTI3cDvo29jetkoM3-jhPkA14ropINN8qibe7D4MM_ofXsYj5KjfQM2EwyRlE108Nd1701rD7F50lRIx5HFXamTclyScTcUxs&uuid=1615fc0d-0987-4d2e-9463-51fea35c96b5&authuser=1" />
          <meta name="description" property="og:description" content="We are a people-first company and we provide product and tech leadership coupled with high performing teams, so your company can focus on achieving goals." />
          <meta name="author" content="Empirical LLC" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;600;700;800&family=Red+Hat+Text:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default MyDocument;
