import Image from 'next/image';

import styles from './Portfolio.module.css';

const Portfolio = ({ data }) => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfolio__title}>{data.title}</h1>
      <div className={styles.portfolio__list}>
        {data.previews &&
          data.previews.map((item) => (
            <div key={item.id} className={styles.portfolio__item}>
              <Image src={item.img} width={221} height={135} />
            </div>
          ))}
      </div>
      <div className={styles.previews__button}>Btn</div>
    </div>
  );
};

export default Portfolio;
