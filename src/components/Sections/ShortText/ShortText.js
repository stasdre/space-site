import { AnimatedButton } from '@/components/UI';
import styles from './ShortText.module.css';

const ShortText = ({ children, name }) => (
  <div className={styles.text}>
    <span className={styles.text__name}>{name}</span>
    {children}
    <div className={styles.text__button}>
      <AnimatedButton>Подробнее</AnimatedButton>
    </div>
  </div>
);

export default ShortText;
