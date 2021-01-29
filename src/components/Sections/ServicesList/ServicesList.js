import classNames from 'classnames';
import CategoriesList from './CategoriesList';
import styles from './ServicesList.module.css';

const ServicesList = ({ initialItems, list, cols }) => {
  const initCat = list.map((item) => ({
    ...item,
    services: item.services.length ? item.services.slice(0, initialItems) : [],
  }));

  const aditional = {};
  if (list) {
    list.map((item) => {
      aditional[item.id] = item.services.slice(initialItems);
    });
  }

  return (
    <div
      className={classNames({
        [styles.services]: true,
        [styles.services_col_3]: cols === 3,
      })}
    >
      {initCat.map((cat) => (
        <CategoriesList
          key={cat.id}
          data={cat}
          initialItems={initialItems}
          aditional={aditional[cat.id]}
        />
      ))}
    </div>
  );
};

export default ServicesList;
