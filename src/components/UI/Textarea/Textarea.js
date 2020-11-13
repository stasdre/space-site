import styles from './Textarea.module.css';

const Textarea = ({ placeholder, required, children }) => (
  <label className={styles.input__label}>
    <textarea className={styles.input} placeholder={placeholder} required={required}>
      {children}
    </textarea>
    <span className={styles.input__placeholder}>{placeholder}</span>
  </label>
);

export default Textarea;
