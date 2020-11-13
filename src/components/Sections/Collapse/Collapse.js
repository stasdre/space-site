import Collapsible from 'react-collapsible';
import chunk from '@/helpers/chunkArray';
import styles from './Collapse.module.css';

const Collapse = ({ items }) => {
  if (!items.length) return null;

  const splitedItems = chunk(items, Math.round(items.length / 2));

  return (
    <div className={styles.collapse}>
      {splitedItems.map((item, index) => (
        <div key={index} className={styles.collapse__col}>
          {item.map((faq) => (
            <Collapsible
              triggerTagName="div"
              key={faq.id}
              triggerClassName={styles.collapse__title}
              triggerOpenedClassName={styles.collapse__title}
              className={styles.collapse__item}
              openedClassName={`${styles.collapse__item} ${styles.collapse__item_active}`}
              trigger={faq.title}
              contentInnerClassName={styles.collapse__contant}
            >
              {faq.text}
            </Collapsible>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
