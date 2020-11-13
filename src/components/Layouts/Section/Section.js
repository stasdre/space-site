import styles from './Section.module.css';

const Section = ({ children, className, title }) => (
  <section className={`${className}`}>
    <div className={styles.section__title}>{title}</div>
    {children}
  </section>
);

export default Section;
