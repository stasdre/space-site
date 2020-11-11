import Image from 'next/image';
import { Rating } from '@/components/Rating';
import { AnimatedButton } from '@/components/AnimatedButton';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews.length) return null;

  return (
    <div className={styles.reviews}>
      <ul className={styles.reviews__list}>
        {reviews.map((review) => {
          if (review.id === 'rating') {
            return (
              <li key={review.id} className={styles.reviews__item}>
                <Rating />
              </li>
            );
          }
          return (
            <li key={review.id} className={styles.reviews__item}>
              <a href="#" className={styles.review__link}>
                <Image src={`/${review.img}`} width={460} height={397} />
              </a>
              <div className={styles.review__info}>
                <div className={styles.review__time}>{review.time}</div>
                <div className={styles.review__title}>{review.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.review__button}>
        <AnimatedButton>Смотреть все</AnimatedButton>
      </div>
    </div>
  );
};

export default Reviews;