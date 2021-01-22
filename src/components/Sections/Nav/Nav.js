import { useRouter } from 'next/router';
import Link from 'next/link';

import menu from '../../../../nav';
import styles from './Nav.module.css';

const Nav = () => {
  const { locale } = useRouter();
  return (
    <nav>
      <ul className={styles.nav__list}>
        {menu[locale].map((item, index) => (
          <li key={index} className={styles.nav__item}>
            <Link href={item.link}>
              <a className={styles.nav__link}>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
