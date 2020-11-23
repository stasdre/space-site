import styles from './Social.module.css';

const Social = ({ links, isGray = false }) => {
  if (!links.length) return null;
  return (
    <ul className={`${styles.socials__list} ${isGray && styles.socials__list_gray}`}>
      {links.map((item, index) => (
        <li key={index} className={`${styles.socails__item}`}>
          <a href={item.link} className={`${styles.socails__link} ${styles[item.name]}`}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
