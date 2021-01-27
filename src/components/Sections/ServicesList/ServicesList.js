import CategoriesList from './CategoriesList';
import styles from './ServicesList.module.css';

const ServicesList = ({ initialItems, list }) => {
  const initCat = list.map((item) => ({
    ...item,
    services: item.services.slice(0, initialItems),
  }));

  const aditional = {};
  if (list) {
    list.map((item) => {
      aditional[item.id] = item.services.slice(initialItems);
    });
  }

  return (
    <div className={styles.services}>
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
