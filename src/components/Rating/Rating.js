import styles from './Rating.module.css';

const Rating = () => (
  <div className={styles.rating}>
    <div className={styles.rating__count}>4.6</div>
    <div className={styles.rating__all}>На основе 123 отзывов google</div>
  </div>
);

export default Rating;
