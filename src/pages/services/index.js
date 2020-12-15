import dynamic from 'next/dynamic';

import { ContactsSection, HeadSection } from '@/components/Layouts';
import { Breadcrumbs, Portfolio, PortfolioDesc, Links } from '@/components/Sections';
import styles from './Services.module.css';

import { Works } from '@/components/Sections/Works';
import { Collapse } from '@/components/Sections/Collapse';
import { SubTitle } from '@/components/Sections/SubTitle';
import { AboutVideo } from '@/components/Sections/AboutVideo';
import { SpaceSite } from '@/components/Pages/Home/SpaceSite';
import { ServiceDesc } from '@/components/Sections/ServiceDesc';

const Services = ({ breadcrumbsItems, portfolio, spaceData, works, faq, links }) => {
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
        <section className={`${styles.services__section}`}>
          <SubTitle>
            Интернет магазин — заказать создание интернет-магазина от Топ #1 SEO компании
            в стране
          </SubTitle>
        </section>
        <section className={`${styles.services__section}`}>
          <AboutVideo
            title="Делаем магазины приносящие продажи с 1-го дня запуска сайта!"
            src="/about_video.jpg"
          />
        </section>
        <section className={`${styles.services__section}`}>
          <SpaceSite data={spaceData} />
        </section>

        <section className={styles.services__section}>
          <ContactsSection />
        </section>

        <section className={styles.services__section}>
          <ServiceDesc />
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
    {
      id: 1,
      title: 'Converse',
      img: 'work_1.jpg',
      type: 'Интернет-магазин',
    },
    {
      id: 2,
      title: 'Zlata Ognevich',
      img: 'work_2.jpg',
      type: 'Корпоративный',
    },
    { id: 3, title: 'EvaSad', img: 'work_3.jpg', type: 'Корпоративный' },
    { id: 4, title: 'Novias', img: 'work_4.jpg', type: 'Интернет магазин' },
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

  const spaceData = {
    title: 'Space Site — разработка сайтов от 690$',
    desc:
      'Создание сайтов — это необходимость для любого бизнеса в настоящее время. С помощью созданного сайта можно быстро продать 99% видов товаров и услуг. Создание сайта поможет получить горячих клиентов из поисковых систем и стабилизировать любой вид бизнеса.',
  };

  return {
    props: {
      breadcrumbsItems,
      portfolio,
      clients,
      works,
      faq,
      links,
      spaceData,
    },
  };
}

export default Services;
