import Link from 'next/link';
import styles from './Nav.module.css';

const menu = [
  { name: 'Услуги', link: '/services' },
  { name: 'Работы', link: '/works' },
  { name: 'Агенция', link: '/agency' },
  { name: 'Блог', link: '/blog' },
  { name: 'Контакты', link: '/contacts' },
];

const Nav = () => (
  <nav>
    <ul className={styles.nav__list}>
      {menu.map((item, index) => (
        <li key={index} className={styles.nav__item}>
          <Link href={item.link}>
            <a className={styles.nav__link}>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
