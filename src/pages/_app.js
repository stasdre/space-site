import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import { Header, Footer } from '@/components/Layouts';
import '@/css/main.css';

function MyApp({ Component, pageProps }) {
  const { t, lang } = useTranslation('common');
  return (
    <>
      <Head>
        <base href={process.env.SITE_URL} />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="keywordlinks-verification"
          content={process.env.KEYWORD_VERIFICATION}
        />
        <meta name="author" content={t('author')} />
      </Head>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Component {...pageProps} />
        </div>
        <Footer />
        <div className="wrapper__bottomBlurContainer">
          <div className="wrapper__bottomBlur"></div>
          <div className="wrapper__bottomBlur2"></div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
