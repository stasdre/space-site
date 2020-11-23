import Image from 'next/image';

import styles from './Head.module.css';

const Head = ({ title }) => {
  return (
    <div className={styles.head}>
      <div className={styles.head__slider}>
        <h1 className={styles.head__title} dangerouslySetInnerHTML={{ __html: title }} />
        <Image src="/main.jpg" width="1195" height="482" />
      </div>
      <div className={styles.head__contacts}>
        <div className={styles.head__click}>Свяжитесь с нами в 1 клик:</div>
      </div>
      <div className={styles.head__planet}></div>
    </div>
  );
};

export default Head;
