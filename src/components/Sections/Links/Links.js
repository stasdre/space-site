import styles from './Links.module.css';

const Links = ({ links }) => {
  if (!links.length) return null;

  return (
    <ul className={styles.links__list}>
      {links.map((item, index) => (
        <li key={item.id} className={styles.links__item}>
          <a className={styles.links__link} href={item.link}>
            <span>{index + 1}</span>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
