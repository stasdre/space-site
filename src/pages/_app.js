import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../assets/css/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
