import { Breadcrumbs } from '../../Sections/Breadcrumbs';

import styles from './PageHeader.module.css';

const PageHeader = ({ title, breadcrumbs, effect }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__breadcrumbs}>
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <h1 className={styles.header__title}>{title}</h1>
    </div>
  );
};

export default PageHeader;
