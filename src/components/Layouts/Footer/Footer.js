import { Address, Contacts, Logo, Nav } from '@/components/Sections/';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footer__top}>
        <Logo />
      </div>
      <div className={styles.footer__content}>
        <div className={styles.footer__contentLeft}>
          <div className={styles.footer__address}>
            <Address />
          </div>
          <div className={styles.footer__contacts}>
            <Contacts />
          </div>
        </div>
        <div className={styles.footer__contentRight}>
          <Nav />
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__copyright}>©2020 Space-Site</div>
        <ul className={styles.footer__terms}>
          <li className={styles.footer__termsItem}>
            <a href="#" className={styles.footer__termsLink}>
              Terms & Conditions
            </a>
          </li>
          <li className={styles.footer__termsItem}>
            <a href="#" className={styles.footer__termsLink}>
              Privacy Policy
            </a>
          </li>
          <li className={styles.footer__termsItem}>
            <a href="#" className={styles.footer__termsLink}>
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
