import Image from 'next/image';

import styles from './Portfolio.module.css';

const Portfolio = ({ data }) => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.portfolio__title}>{data.title}</h1>
    </div>
  );
};

export default Portfolio;
