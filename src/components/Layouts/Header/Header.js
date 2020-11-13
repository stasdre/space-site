import Link from 'next/link';
import { Logo, Nav } from '@/components/Sections';
import { Button, BurgerNav } from '@/components/UI';
import PhoneIcon from '../../../assets/img/phone.svg';
import PlayIcon from '../../../assets/img/play.svg';
import styles from './Header.module.css';

const Header = () => {
  const handelClick = () => {};

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <div className={styles.header__left}>
            <Link href="/">
              <a className={styles.header__logo}>
                <Logo />
              </a>
            </Link>
            <div className={styles.header__lang}></div>
          </div>
          <div className={styles.header__nav}>
            <Nav />
          </div>
          <div className={styles.header__right}>
            <ul className={styles.header__controls}>
              <li className={styles.header__controls_item}>
                <Button handelClick={handelClick} round type="switcher" />
              </li>
              <li className={styles.header__controls_item}>
                <Button round type="primary">
                  <PhoneIcon />
                </Button>
              </li>
              <li className={`${styles.header__controls_item} ${styles.header__play}`}>
                <Button round type="base">
                  <PlayIcon />
                </Button>
              </li>
            </ul>
            <div className={styles.header__btn}>
              <Button type="base">Нанять нас</Button>
            </div>
            <div className={styles.header__burger}>
              <BurgerNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
