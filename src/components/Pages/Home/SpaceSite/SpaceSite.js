import styles from './SpaceSite.module.css';

const SpaceSite = ({ data }) => {
  return (
    <div className={styles.space}>
      {/* <div className={styles.space__title}>{data.title}</div> */}
      <div className={styles.space__desc} dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default SpaceSite;
