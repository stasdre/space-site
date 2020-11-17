import Image from 'next/image';

import styles from './Head.module.css';

const Head = ({ title }) => {
  return (
    <div className={styles.head}>
      <h1 className={styles.head__title} dangerouslySetInnerHTML={{ __html: title }} />
      <div className={styles.head__about}>
        <div className={styles.head__preview}>
          <Image src="/about.jpg" width={294} height={170} />
        </div>
        <div className={styles.head__name}>О компании за 52 секунды</div>
      </div>
      <div className={styles.head__planet}></div>
    </div>
  );
};

export default Head;
