import React, { useState } from 'react';
import classNames from 'classnames';
import { Links } from '@/components/Sections';

import styles from './ServiceDesc.module.css';

const ServiceDesc = ({ service }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
  };

  return (
    <>
      <ul className={styles.tabs__list}>
        <li>
          <a
            className={classNames({
              [styles.tabs__link]: true,
              [styles.tabs__link_active]: activeTab === 1,
            })}
            href={`#${service.desc_hash}`}
            onClick={(e) => handleTabChange(e, 1)}
          >
            Описание интернет-магазина
          </a>
        </li>
        <li>
          <a
            className={classNames({
              [styles.tabs__link]: true,
              [styles.tabs__link_active]: activeTab === 2,
            })}
            href={`#${service.price_hash}`}
            onClick={(e) => handleTabChange(e, 2)}
          >
            Стоимость интернет-магазина
          </a>
        </li>
        <li>
          <a
            className={classNames({
              [styles.tabs__link]: true,
              [styles.tabs__link_active]: activeTab === 3,
            })}
            href={`#${service.more_hash}`}
            onClick={(e) => handleTabChange(e, 3)}
          >
            Подробнее
          </a>
        </li>
      </ul>
      <div className={styles.tabs__content}>
        <div
          id="tab1"
          className={classNames({
            [styles.tabs__pane]: true,
            [styles.tabs__desc]: true,
            [styles.tabs__pane_active]: activeTab === 1,
          })}
        >
          <div
            className={styles.tabs__desc_content}
            dangerouslySetInnerHTML={{ __html: service.desc }}
          />
          <Links links={service.links} />
        </div>
        <div
          id="tab2"
          className={classNames({
            [styles.tabs__pane]: true,
            [styles.tabs__cost]: true,
            [styles.tabs__pane_active]: activeTab === 2,
          })}
        >
          <ul className={styles.tabs__cost__list}>
            {service.prices.map((item) => (
              <li className={styles.tabs__cost__item} key={item.id}>
                <div className={styles.tabs__cost__top}>
                  <div className={styles.tabs__cost__name}>{item.title}</div>
                  <div className={styles.tabs__cost__price}>
                    {item.from && <span>от</span>} $ {item.price}
                  </div>
                </div>
                <div className={styles.tabs__cost__bottom}>
                  {item.promo && (
                    <div className={styles.tabs__cost__addition}>{item.promo}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="tab3"
          className={classNames({
            [styles.tabs__pane]: true,
            [styles.tabs__more]: true,
            [styles.tabs__pane_active]: activeTab === 3,
          })}
          dangerouslySetInnerHTML={{ __html: service.more }}
        />
      </div>
    </>
  );
};

export default ServiceDesc;
