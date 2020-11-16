import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './PortfolioDesc.module.css';

const PortfolioDesc = () => (
  <Tabs>
    <TabList className={styles.portfolio__tabList}>
      <Tab
        className={styles.portfolio__tab}
        selectedClassName={styles.portfolio__tab_active}
      >
        Описание интернет-магазина
      </Tab>
      <Tab
        className={styles.portfolio__tab}
        selectedClassName={styles.portfolio__tab_active}
      >
        Стоимость интернет-магазина
      </Tab>
    </TabList>

    <TabPanel
      className={styles.portfolio__text}
      selectedClassName={styles.portfolio__text_active}
    >
      За это время подобрали квалифицированных специалистов, которые готовы помочь
      клиентам в создании сайта любой сложности, а также внедрить в него все необходимые
      функции для высокой эффективности и результативности ведения вашего бизнеса.
    </TabPanel>
    <TabPanel
      className={styles.portfolio__text}
      selectedClassName={styles.portfolio__text_active}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </TabPanel>
  </Tabs>
);

export default PortfolioDesc;
