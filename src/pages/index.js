import Head from 'next/head';

import { ContactsSection, HeadSection } from '@/components/Layouts';

import { Head as HeadPage } from '@/components/Pages/Home';

import styles from './Index.module.css';

import { Reviews } from '@/components/Sections/Reviews';
import { Services } from '@/components/Sections/Services';
import { Works } from '@/components/Sections/Works';
import { Clients } from '@/components/Sections/Clients';
import { Collapse } from '@/components/Sections/Collapse';
import { SpaceSite } from '@/components/Pages/Home/SpaceSite';
import { SubTitle } from '@/components/Sections/SubTitle';
import { AboutVideo } from '@/components/Sections/AboutVideo';

const Home = ({ title, spaceData, services, works, reviews, clients, faq }) => {
  return (
    <>
      <Head>
        <title>
          Создание сайтов, Киев — разработка сайта от Space Site | Харьков, Одесса, Днипро
        </title>
        <meta
          name="description"
          content="Создание сайта для бизнеса в Киеве. Разработка сайтов под заказ. Основано в 2013 году. Свой отдел маркетинга и видеопродакшн. 40+ специалистов в штате. Опытные программисты. Создать сайт в Space Site — правильно. Звоните!"
        />
      </Head>
      <div className="container">
        <HeadSection>
          <HeadPage title={title} />
        </HeadSection>
      </div>
      <div className={`container container__padding`}>
        <section className={styles.main__section}>
          <SubTitle>
            Создание прибыльных продающих сайтов для бизнеса под ключ с гарантией
            результата.
          </SubTitle>
        </section>
        <section className={styles.main__section}>
          <AboutVideo title="О компании за 52 секунды" src="/about_video.jpg" />
        </section>
        <section className={styles.main__section}>
          <SpaceSite data={spaceData} />
        </section>
        <section className={styles.main__section}>
          <div className="section__title">Услуги</div>
          <Services services={services} />
        </section>
        <section className={styles.main__section}>
          <div className="section__title">Работы</div>
          <Works works={works} />
        </section>
        <section className={styles.main__section}>
          <div className="section__title">Отзывы</div>
          <Reviews reviews={reviews} />
        </section>
        <section className={styles.main__section}>
          <div className="section__title">Наши клиенты</div>
          <Clients clients={clients} />
        </section>
        <section className={styles.main__section}>
          <div className="section__title">Важно!</div>
          <Collapse items={faq} />
        </section>
        <section className={styles.main__section}>
          <ContactsSection />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const title = '<span>Создание cайтов</span><br><span>от Google партнеров</span>';

  const spaceData =
    'Создание сайтов — это необходимость для любого бизнеса в настоящее время. С помощью созданного сайта можно быстро продать 99% видов товаров и услуг. Создание сайта поможет получить горячих клиентов из поисковых систем и стабилизировать любой вид бизнеса.';

  const about = {
    title: 'Агенция',
    desc:
      'Занимаемся разработкой сайтов для бизнеса с 2013 года. За это время подобрали квалифицированных специалистов, которые готовы помочь клиентам в создании сайта любой сложности, а также внедрить в него все необходимые функции для высокой эффективности и результативности ведения вашего бизнеса.',
    link: '#',
  };

  const services = [
    { id: 1, title: 'Создание сайтов', link: '#' },
    { id: 2, title: 'Верстка сайтов', link: '#' },
    { id: 3, title: 'Разработка на CMS', link: '#' },
    { id: 4, title: 'Веб-дизайн', link: '#' },
    { id: 5, title: 'Поддерка сайта', link: '#' },
    { id: 6, title: 'Мобильное приложение', link: '#' },
  ];

  const works = [
    {
      'Work.id': 1,
      name: 'Converse',
      url: '#',
      img: '/works/work_1.jpg',
      'Work.WorkType.name': 'Интернет-магазин',
    },
    {
      'Work.id': 2,
      name: 'Zlata Ognevich',
      url: '#',
      img: '/works/work_2.jpg',
      'Work.WorkType.name': 'Корпоративный',
    },
    {
      'Work.id': 3,
      name: 'EvaSad',
      url: '#',
      img: '/works/work_3.jpg',
      'Work.WorkType.name': 'Корпоративный',
    },
    {
      'Work.id': 4,
      name: 'Novias',
      url: '#',
      img: '/works/work_4.jpg',
      'Work.WorkType.name': 'Интернет магазин',
    },
  ];

  const reviews = [
    {
      id: 1,
      title: 'Отзыв от Ростислава Валихновского',
      time: '0:52',
      img: 'review_1.jpg',
    },
    {
      id: 2,
      title: 'Отзыв от Ростислава Валихновского',
      time: '6:11',
      img: 'review_2.jpg',
    },
    {
      id: 3,
      title: 'Отзыв от Ростислава Валихновского',
      time: '1:52',
      img: 'review_3.jpg',
    },
    {
      id: 4,
      title: 'Отзыв от Ростислава Валихновского',
      time: '1:52',
      img: 'review_4.jpg',
    },
  ];

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

  return {
    props: {
      title,
      spaceData,
      about,
      services,
      works,
      reviews,
      clients,
      faq,
    },
    revalidate: 10,
  };
}

export default Home;
