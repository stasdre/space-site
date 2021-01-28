import { useState } from 'react';
import WorkItem from './WorkItem';
import { AnimatedButton } from '@/components/UI';
import NProgress from 'nprogress'; //nprogress module
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Works.module.css';

const WorksLoaded = ({ initialData, link }) => {
  const [works, setWorks] = useState(initialData);
  const [page, setPage] = useState(2);
  const countItems = 6;

  const showMore = async () => {
    NProgress.start();
    const res = await fetch(`${link}/${page}`);
    const { data } = await res.json();
    NProgress.done();
    if (data && data.length) {
      setWorks([...works, ...data]);
      setPage(page + 1);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    lazyLoad: '/',
    centerPadding: '10%',
    beforeChange: (oldIndex, newIndex) => {
      if (newIndex % countItems === 0) {
        showMore();
      }
    },
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
    <div className={styles.works}>
      <Slider {...settings} className={styles.works__list}>
        {works.map((work) => (
          <WorkItem work={work} key={work['Work.id']} />
        ))}
      </Slider>
      <div className={styles.works__button}>
        <AnimatedButton onClick={showMore} link="/works">
          Загрузить еще
        </AnimatedButton>
      </div>
    </div>
  );
};

export default WorksLoaded;
