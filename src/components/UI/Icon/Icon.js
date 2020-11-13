import styles from './Icon.module.css';

const Icon = ({ children, size }) => {
  let styleSize = styles.icon__small;

  switch (size) {
    case 'small':
      styleSize = styles.icon__small;
      break;
  }

  return <div className={`${styles.icon} ${styleSize}`}>{children}</div>;
};

export default Icon;
