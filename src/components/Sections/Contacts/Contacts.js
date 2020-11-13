import { Icon } from '@/components/UI';

import styles from './Contacts.module.css';
import Telegram from '../../../assets/icons/telegram.svg';
import Viber from '../../../assets/icons/viber.svg';

const FooterContacts = () => (
  <div className={styles.footerContacts}>
    <div className={styles.FooterContacts__title}>Контакты</div>
    <a href="tell:+380973551177" className={styles.FooterContacts__phone}>
      +38 (097) 355 11 77
    </a>
    <a href="mailto:info@space-site.com.ua" className={styles.FooterContacts__email}>
      info@space-site.com.ua
    </a>
    <ul className={styles.FooterContacts__icons}>
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
    </ul>
  </div>
);

export default FooterContacts;
