import { Social } from '@/components/Sections';

import styles from './Contacts.module.css';

const socials = [
  { name: 'telegramm', link: '#' },
  { name: 'viber', link: '#' },
];

const FooterContacts = () => (
  <div className={styles.footerContacts}>
    <div className={styles.FooterContacts__title}>Контакты</div>
    <a href="tell:+380973551177" className={styles.FooterContacts__phone}>
      +38 (097) 355 11 77
    </a>
    <a href="mailto:info@space-site.com.ua" className={styles.FooterContacts__email}>
      info@space-site.com.ua
    </a>
    <Social links={socials} />
    {/* <ul className={styles.FooterContacts__icons}>
      <li className={styles.FooterContacts__item}>
        <a href="#">
          <Icon size="small">
            <Telegram />
          </Icon>
        </a>
      </li>
      <li className={styles.FooterContacts__item}>
        <a href="#">
          <Icon size="small">
            <Viber />
          </Icon>
        </a>
      </li>
    </ul> */}
  </div>
);

export default FooterContacts;
