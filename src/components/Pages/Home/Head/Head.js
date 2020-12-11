import { Social } from '@/components/Sections';

import styles from './Head.module.css';

const socials = [
  { name: 'fbMessage', link: '#' },
  { name: 'telegramm', link: '#' },
  { name: 'viber', link: '#' },
  { name: 'phone', link: '#' },
];

const Head = ({ title }) => {
  return (
    <div className={styles.head}>
      <h1 className={styles.head__title} dangerouslySetInnerHTML={{ __html: title }} />
      <div className={styles.head__contacts}>
        <div className={styles.head__click}>Свяжитесь с нами в 1 клик:</div>
        <Social links={socials} />
      </div>
      <div className={styles.head__planet}></div>
    </div>
  );
};

export default Head;
