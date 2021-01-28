import { useRouter } from 'next/router';
import WorkItem from './WorkItem';
import { AnimatedButton } from '@/components/UI';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import menu from '../../../../nav';
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
  const { locale } = useRouter();

  if (!works || works.length === 0) return null;

  const navItemData = menu[locale].find((item) => item.uuid === 'works');

  return (
    <div className={styles.works}>
      <Slider {...settings} className={styles.works__list}>
        {works.map((work) => (
          <WorkItem work={work} key={work['Work.id']} />
        ))}
      </Slider>
      <div className={styles.works__button}>
        <AnimatedButton type="link" link={navItemData.link}>
          Смотреть все
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Works;
