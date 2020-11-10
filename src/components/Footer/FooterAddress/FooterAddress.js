import styles from './FooterAddress.module.css';

const FooterAddress = () => (
  <div className={styles.address}>
    <div className={styles.address__title}>Ждем в гости</div>
    <div className={styles.address__text}>
      <p>Street L. Rudenko, 6а. г.</p>
      <p>Kyiv, Ukraine 02140</p>
    </div>
  </div>
);

export default FooterAddress;
