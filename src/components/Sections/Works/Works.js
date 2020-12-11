import Image from 'next/image';
import { AnimatedButton } from '@/components/UI';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Works.module.css';

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  centerMode: true,
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

const Works = ({ works }) => {
  if (!works.length) return null;

  return (
    <div className={styles.works}>
      <Slider {...settings} className={styles.works__list}>
        {works.map((work) => (
          <div className={styles.works__item} key={work.id}>
            <a href="#" className={styles.works__link}>
              <Image src={`/works/${work.img}`} width={582} height={723} />
              <div className={styles.works__info}>
                <div className={styles.works__top}>
                  <div className={styles.works__title}>{work.type}</div>
                </div>
                <div className={styles.works__bottom}>{work.title}</div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
      <div className={styles.works__button}>
        <AnimatedButton type="link" link="/works">
          Смотреть все
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Works;
