import styles from './Logo.module.css';
import LogoSvg from '../../../assets/img/logo.svg';

const Logo = () => (
  <div className={styles.logo}>
    <div className={styles.logo__svg}>
      <LogoSvg />
    </div>
    <span className={styles.logo__name}>Space-site</span>
  </div>
);

export default Logo;
