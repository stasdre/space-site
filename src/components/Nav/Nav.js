import styles from './Nav.module.css';

const menu = [
  { name: 'Услуги', link: '#' },
  { name: 'Работы', link: '#' },
  { name: 'Агенция', link: '#' },
  { name: 'Блог', link: '#' },
  { name: 'Контакты', link: '#' },
];

const Nav = () => (
  <nav>
    <ul className={styles.nav__list}>
      {menu.map((item, index) => (
        <li key={index} className={styles.nav__item}>
          <a className={styles.nav__link} href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
