import styles from './Links.module.css';

const Links = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <ul className={styles.links__list}>
      {links.map((item, index) => (
        <li key={item.id} className={styles.links__item}>
          <div className={styles.links__link}>
            <span>{index + 1}</span>
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Links;
