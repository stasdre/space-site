import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
  if (!items.length) return null;

  return (
    <ul className={styles.breadcrumbs__list}>
      {items.map((item, index) => (
        <li className={styles.breadcrumbs__items} key={index}>
          {item.link ? (
            <a className={styles.breadcrumbs__link} href={item.link}>
              {item.name}
            </a>
          ) : (
            <>{item.name}</>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
