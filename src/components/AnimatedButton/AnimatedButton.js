import styles from './AnimatedButton.module.css';

const AnimatedButton = ({ children }) => <button className={styles.button}>{children}</button>;

export default AnimatedButton;
