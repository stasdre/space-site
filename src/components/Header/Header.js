import { Logo } from '@/components/Logo';
import { Nav } from '@/components/Nav';
import { Button } from '@/components/Button';
import PhoneIcon from '../../assets/img/phone.svg';
import PlayIcon from '../../assets/img/play.svg';
import styles from './Header.module.css';

const Header = () => {
  const handelClick = () => {};

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <div className={styles.header__left}>
            <div className={styles.header__logo}>
              <Logo />
            </div>
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
              <li className={styles.header__controls_item}>
                <Button round type="base">
                  <PlayIcon />
                </Button>
              </li>
            </ul>
            <div className={styles.header__btn}>
              <Button type="base">Нанять нас</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
