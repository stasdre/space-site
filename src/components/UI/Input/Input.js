import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, required }) => (
  <label className={styles.input__label}>
    <input className={styles.input} type={type} placeholder={placeholder} required={required} />
    <span className={styles.input__placeholder}>{placeholder}</span>
  </label>
);

export default Input;
