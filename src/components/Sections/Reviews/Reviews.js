import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatedButton } from '@/components/UI';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews.length) return null;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    dots: false,
    lazyLoad: '/',
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 50000,
        settings: 'unslick',
      },
      {
        breakpoint: 768,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    ],
  };

  return (
    <div className={styles.reviews}>
      <Slider {...settings} className={styles.reviews__list}>
        {reviews.map((review) => {
          return (
            <div key={review.id} className={styles.reviews__item}>
              <a href="#" className={styles.review__link}>
                <Image src={`/${review.img}`} width={582} height={397} />
              </a>
              <div className={styles.review__info}>
                <div className={styles.review__time}>{review.time}</div>
                <div className={styles.review__title}>{review.title}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
  // return (
  //   <div className={styles.reviews}>
  //     <ul className={styles.reviews__list}>
  //       {reviews.map((review) => {
  //         return (
  //           <li key={review.id} className={styles.reviews__item}>
  //             <a href="#" className={styles.review__link}>
  //               <Image src={`/${review.img}`} width={582} height={397} />
  //             </a>
  //             <div className={styles.review__info}>
  //               <div className={styles.review__time}>{review.time}</div>
  //               <div className={styles.review__title}>{review.title}</div>
  //             </div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //     <div className={styles.review__button}>
  //       <AnimatedButton>Смотреть все</AnimatedButton>
  //     </div>
  //   </div>
  // );
};

export default Reviews;
