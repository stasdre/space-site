import Link from 'next/link';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
  if (!items.length) return null;

  return (
    <ul className={styles.breadcrumbs__list}>
      {items.map((item, index) => (
        <li className={styles.breadcrumbs__items} key={index}>
          {item.link ? (
            <Link href={item.link}>
              <a className={styles.breadcrumbs__link}>{item.name}</a>
            </Link>
          ) : (
            <>{item.name}</>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
