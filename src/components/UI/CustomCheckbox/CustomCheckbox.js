import styles from './CustomCheckbox.module.css';

const CustomCheckbox = ({ label }) => (
  <label className={styles.checkbox}>
    <input className={styles.checkbox__input} type="checkbox" />
    <span className={styles.checkbox__name}>{label}</span>
  </label>
);

export default CustomCheckbox;
