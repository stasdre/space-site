import Link from 'next/link';

import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      className={styles.breadcrumbs__list}
    >
      {items.map((item, index) => (
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className={styles.breadcrumbs__items}
          key={index}
        >
          {item.link && item.link !== '#' ? (
            <>
              <Link href={item.link}>
                <a
                  itemScope
                  itemType="https://schema.org/Thing"
                  itemProp="item"
                  className={styles.breadcrumbs__link}
                >
                  <span itemProp="name">{item.name}</span>
                </a>
              </Link>
              <meta itemProp="position" content={index + 1} />
            </>
          ) : item.link === '#' ? (
            <>
              <a
                href="#"
                itemScope
                itemType="https://schema.org/Thing"
                itemProp="item"
                className={styles.breadcrumbs__link}
              >
                <span itemProp="name">{item.name}</span>
              </a>
              <meta itemProp="position" content={index + 1} />
            </>
          ) : (
            <>
              <span itemProp="name">{item.name}</span>
              <meta itemProp="position" content={index + 1} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
