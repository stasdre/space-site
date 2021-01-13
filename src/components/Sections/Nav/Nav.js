import { useRouter } from 'next/router';

import Link from 'next/link';
import styles from './Nav.module.css';

const menu = {
  ru: [
    { name: 'Услуги', link: '/веб-услуги-цена' },
    { name: 'Работы', link: '/works' },
    { name: 'Агенция', link: '/agency' },
    { name: 'Блог', link: '/blog' },
    { name: 'Контакты', link: '/contacts' },
  ],
  uk: [
    { name: 'Послуги', link: '/uk/веб-послуги-ціна' },
    { name: 'Работы', link: '/works' },
    { name: 'Агенция', link: '/agency' },
    { name: 'Блог', link: '/blog' },
    { name: 'Контакты', link: '/contacts' },
  ],
  en: [
    { name: 'Services', link: '/en/services-prices' },
    { name: 'Работы', link: '/works' },
    { name: 'Агенция', link: '/agency' },
    { name: 'Блог', link: '/blog' },
    { name: 'Контакты', link: '/contacts' },
  ],
};

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
