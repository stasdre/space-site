import styles from './AnimatedButton.module.css';

const AnimatedButton = ({ children, color = 'primary', type = 'link', link }) => {
  let themeButton;
  switch (color) {
    case 'gray':
      themeButton = styles.gray;
      break;
    default:
      themeButton = styles.primary;
      break;
  }

  if (type === 'link') {
    return (
      <a href={link} className={`${styles.button} ${themeButton}`}>
        {children}
      </a>
    );
  }

  return <button className={`${styles.button} ${themeButton}`}>{children}</button>;
};

export default AnimatedButton;
