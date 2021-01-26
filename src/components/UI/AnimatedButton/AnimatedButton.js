import Link from 'next/link';

import styles from './AnimatedButton.module.css';

const AnimatedButton = ({
  children,
  color = 'primary',
  type = 'button',
  link,
  ...props
}) => {
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
      <Link href={link}>
        <a className={`${styles.button} ${themeButton}`}>{children}</a>
      </Link>
    );
  }

  return (
    <button {...props} className={`${styles.button} ${themeButton}`}>
      {children}
    </button>
  );
};

export default AnimatedButton;
