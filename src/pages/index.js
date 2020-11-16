import { HeadSection, Section } from '@/components/Layouts';
import {
  Contacts,
  ShortText,
  Works,
  Reviews,
  Collapse,
  ContactForm,
  Services,
  Clients,
} from '@/components/Sections';

import { Head, SpaceSite } from '@/components/Pages/Home';

import styles from './Index.module.css';

const Home = ({ title, spaceData, about, services, works, reviews, clients, faq }) => {
  return (
    <>
      <div className="container">
        <HeadSection>
          <Head title={title} />
        </HeadSection>
      </div>
      <div className={`container container__padding`}>
        <div className={styles.main__space}>
          <SpaceSite data={spaceData} />
        </div>
        <div className={styles.main__text}>
          <ShortText name={about.title} link={about.link}>
            {about.desc}
          </ShortText>
        </div>
        <Section className={styles.main__section} title="Услуги">
          <Services services={services} />
        </Section>
        <Section className={styles.main__section} title="Работы">
          <Works works={works} />
        </Section>
        <Section className={styles.main__section} title="Отзывы">
          <Reviews reviews={reviews} />
        </Section>
        <Section className={styles.main__section} title="Наши клиенты">
          <Clients clients={clients} />
        </Section>
        <Section className={styles.main__section} title="Важно!">
          <Collapse items={faq} />
        </Section>
        <div className={styles.main__contacts}>
          <div className={styles.main__contactsLeft}>
            <Contacts />
          </div>
          <div className={styles.main__contactsRight}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const title = '<span>Создание cайтов</span><br><span>от Google партнеров</span>';

  const spaceData = {
    title: 'Space Site — разработка сайтов от 690$',
    desc:
      'Создание сайтов — это необходимость для любого бизнеса в настоящее время. С помощью созданного сайта можно быстро продать 99% видов товаров и услуг. Создание сайта поможет получить горячих клиентов из поисковых систем и стабилизировать любой вид бизнеса.',
  };

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
    { id: 1, title: 'Zlata Ognevich', year: '2020' },
    { id: 2, title: 'Laskarda', year: '2020' },
    { id: 3, title: 'EvaSad', year: '2020' },
    { id: 4, title: 'Novias', year: '2020' },
    { id: 5, title: 'Converse', year: '2020' },
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
  };
}

export default Home;
