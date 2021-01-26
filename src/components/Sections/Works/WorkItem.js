import Image from 'next/image';

import styles from './WorkItem.module.css';

const WorkItem = ({ work }) => (
  <div className={styles.works__item}>
    <a href={work.url} className={styles.works__link}>
      <Image src={work.img} width={582} height={723} />
      <div className={styles.works__info}>
        <div className={styles.works__top}>
          <div className={styles.works__title}>{work['Work.WorkType.name']}</div>
        </div>
        <div className={styles.works__bottom}>{work.name}</div>
      </div>
    </a>
  </div>
);

export default WorkItem;
