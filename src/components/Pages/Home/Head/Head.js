import styles from './Head.module.css';

const Head = ({ title }) => {
  return (
    <div className={styles.head}>
      <h1 className={styles.head__title} dangerouslySetInnerHTML={{ __html: title }} />
      <div className={styles.head__planet}></div>
    </div>
  );
};

export default Head;
