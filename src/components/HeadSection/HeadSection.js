import Clock from 'react-digital-clock';
import styles from './HeadSection.module.css';

const HeadSection = ({ children }) => (
  <div className="container">
    <div className={styles.head}>
      <div className={styles.head__content}>{children}</div>
      <div className={styles.head__time}>
        <Clock hour12={false} />
      </div>
    </div>
  </div>
);

export default HeadSection;
