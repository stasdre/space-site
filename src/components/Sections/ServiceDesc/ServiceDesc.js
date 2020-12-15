import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ServiceDesc.module.css';

const costs = [
  { id: 1, name: 'Лучшая цена', price: '$1111' },
  { id: 2, name: 'Лучшая цена', price: '$1111' },
  { id: 3, name: 'Лучшая цена', price: '$1111' },
];

const ServiceDesc = () => {
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
            href="#tab1"
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
            href="#tab2"
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
            href="#tab3"
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
          <p>
            За это время подобрали квалифицированных специалистов, которые готовы помочь
            клиентам в создании сайта любой сложности, а также внедрить в него все
            необходимые функции для высокой эффективности и результативности ведения
            вашего бизнеса.
          </p>
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
            {costs.map((item) => (
              <li className={styles.tabs__cost__item} key={item.id}>
                <div className={styles.tabs__cost__top}>
                  <div className={styles.tabs__cost__name}>{item.name}</div>
                  <div className={styles.tabs__cost__price}>
                    <span>от</span> {item.price}
                  </div>
                </div>
                <div className={styles.tabs__cost__bottom}>
                  <div className={styles.tabs__cost__addition}>
                    Адаптация под мобильные в подарок!
                  </div>
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
        >
          <p>
            Как видите, стоимость создания сайта не всегда определяет главное – его
            качество. Обычно секрет эффективной работы и популярности хорошего
            интернет-магазина в работе в тандеме – заказчик – исполнитель. В том,
            насколько первый сможет понять, что он хочет видеть в итоге и какие бонусы
            получать от своего сайта, а второй сумеет это все воссоздать, красиво
            подсветить главные моменты, аккуратно спрятать в тень недостатки и небольшие
            неточности, поразить клиента или покупателя замечательной картинкой и шикарным
            интерфейсом. Не бывает так, чтобы без грамотных указаний и общей концепции
            компании был создан хороший онлайн-ресурс. Конечно, хочется не прикладывая
            усилий, вложить денежные инвестиции и просто ожидать баснословных прибылей. Но
            так не бывает и не может быть.{' '}
          </p>
          <p>
            Однако, главное в разработке сайтов «под ключ» это не экономия средств, не
            гибкая работа дизайнера, который может исполнить любой ваш каприз и сразу
            понимает все ваши идеи, не пожизненное техническое обслуживание и прочие
            радости и приятные вещи. Это работа настоящих профессионалов, творцов, людей
            которые создадут настоящий шедевр для вас, и тогда совсем неважно какая у него
            стоимость. Важно, чтобы вашим заказом занимались настоящие поклонники
            веб-дизайна и работы над сайтом, люди, для которых качество, красота и
            индивидуальность основное в работе. Такие фанаты обязательно будут и сами
            интересоваться вашим делом, «болеть» за него и за свой проект, так как вложили
            в него свой труд, чувства, эмоции, частичку своей души.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceDesc;
