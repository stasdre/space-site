import dynamic from 'next/dynamic';

import { ContactsSection, HeadSection } from '@/components/Layouts';
import { Breadcrumbs, Portfolio, PortfolioDesc, Links } from '@/components/Sections';
import styles from './Services.module.css';

const Works = dynamic(() => import('@/components/Sections/Works/Works'));
const Clients = dynamic(() => import('@/components/Sections/Clients/Clients'));
const Collapse = dynamic(() => import('@/components/Sections/Collapse/Collapse'));

const Services = ({ breadcrumbsItems, portfolio, clients, works, faq, links }) => {
  return (
    <>
      <div className="container">
        <div className={styles.services__breadcrumbs}>
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
        <HeadSection showTime>
          <Portfolio data={portfolio} />
        </HeadSection>
      </div>
      <div className="container container__padding">
        <section className={styles.services__section}>
          <div className="section__title">Наши клиенты</div>
          <Clients clients={clients} />
        </section>
        <section className={`${styles.services__section} ${styles.services__desc}`}>
          <div className="section__title">
            Интернет магазин — заказать создание интернет-магазина от Топ #1 SEO компании
          </div>
          <PortfolioDesc />
        </section>
        <section className={styles.services__section}>
          <Links links={links} />
        </section>
        <section className={styles.services__section}>
          <div className="section__title">Работы</div>
          <Works works={works} />
        </section>
        <section className={styles.services__section}>
          <div className="section__title">Важно!</div>
          <Collapse items={faq} />
        </section>
        <section className={styles.services__section}>
          <ContactsSection />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const breadcrumbsItems = [{ name: 'Главная', link: '/' }, { name: 'Интернет-магазин' }];

  const portfolio = {
    title: 'Интернет-магазин который продает',
    previews: [
      { id: 1, img: '/portfolio/item_1.jpg', main: 1 },
      { id: 2, img: '/portfolio/item_2.jpg' },
      { id: 3, img: '/portfolio/item_3.jpg' },
      { id: 4, img: '/portfolio/item_4.jpg' },
    ],
  };

  const clients = [
    {
      id: 1,
      img: 'client_1.png',
    },
    {
      id: 2,
      img: 'client_2.png',
    },
    {
      id: 3,
      img: 'client_3.png',
    },
    {
      id: 4,
      img: 'client_4.png',
    },
    {
      id: 5,
      img: 'client_5.png',
    },
    {
      id: 6,
      img: 'client_6.png',
    },
    {
      id: 7,
      img: 'client_7.png',
    },
    {
      id: 8,
      img: 'client_8.png',
    },
  ];

  const works = [
    { id: 1, title: 'Zlata Ognevich', year: '2020' },
    { id: 2, title: 'Laskarda', year: '2020' },
    { id: 3, title: 'EvaSad', year: '2020' },
    { id: 4, title: 'Novias', year: '2020' },
    { id: 5, title: 'Converse', year: '2020' },
  ];

  const faq = [
    {
      id: 1,
      title: 'Главное — очень кратко',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 2,
      title: 'Услуги компании',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      title: 'Стоимость разработки',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 4,
      title: 'Преимущества Space',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 5,
      title: 'Отзывы о компании',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 6,
      title: 'Очень важная инфа (!)',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 7,
      title: 'Обязательно к чтению',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 8,
      title: 'Не допустите эти ошибки',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];

  const links = [
    { id: 1, title: 'Интернет-магазин, который продает', link: '#' },
    { id: 2, title: 'Современный продающий дизайн', link: '#' },
    { id: 3, title: 'Быстрая выгрузка товаров через плагины ', link: '#' },
    { id: 4, title: 'Интернет-магазин, который продает', link: '#' },
    { id: 5, title: 'Современный продающий дизайн', link: '#' },
    { id: 6, title: 'Быстрая выгрузка товаров через плагины ', link: '#' },
  ];

  return {
    props: {
      breadcrumbsItems,
      portfolio,
      clients,
      works,
      faq,
      links,
    },
  };
}

export default Services;
