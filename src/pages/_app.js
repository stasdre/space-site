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
      </div>
    </>
  );
}

export default MyApp;
