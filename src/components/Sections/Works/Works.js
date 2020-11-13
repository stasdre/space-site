import { AnimatedButton } from '@/components/UI';
import styles from './Works.module.css';

const Works = ({ works }) => {
  if (!works.length) return null;

  return (
    <div className={styles.works}>
      <ul className={styles.works__list}>
        {works.map((work) => (
          <li className={styles.works__item} key={work.id}>
            <a href="#" className={styles.works__link}>
              <div className={styles.works__title}>{work.title}</div>
              <span className={styles.works__year}>{work.year}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.works__button}>
        <AnimatedButton>Смотреть все</AnimatedButton>
      </div>
    </div>
  );
};

export default Works;
