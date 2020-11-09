import styles from './Button.module.css';

const Button = ({ round, type = 'base', handelClick, children }) => {
  let classes = `${styles.btn}`;

  if (round) {
    classes += ` ${styles.btn__round}`;
  }

  switch (type) {
    case 'switcher':
      classes += ` ${styles.btn__switch}`;
      break;

    case 'primary':
      classes += ` ${styles.btn__primary}`;
      break;

    default:
      break;
  }

  return (
    <button onClick={handelClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
