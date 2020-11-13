import styles from './AnimatedButton.module.css';

const AnimatedButton = ({ children, color = 'primary' }) => {
  let themeButton;
  switch (color) {
    case 'gray':
      themeButton = styles.gray;
      break;
    default:
      themeButton = styles.primary;
      break;
  }
  return <button className={`${styles.button} ${themeButton}`}>{children}</button>;
};

export default AnimatedButton;
