import styles from './Services.module.css';

const Services = ({ services }) => {
  if (!services.length) return null;

  return (
    <div>
      <ul className={styles.services__list}>
        {services.map((item) => (
          <li key={item.id} className={styles.services__item}>
            <a href={item.link} className={styles.services__link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
