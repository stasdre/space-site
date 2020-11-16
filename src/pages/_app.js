import { Header, Footer } from '@/components/Layouts';
import '@/css/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
