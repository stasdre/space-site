import Image from 'next/image';
import { HeadSection } from '@/components/Layouts';
import {
  Contacts,
  ShortText,
  Works,
  Reviews,
  Collapse,
  ContactForm,
} from '@/components/Sections';
import styles from './Index.module.css';

const Home = ({ works, reviews, faq }) => {
  return (
    <>
      <HeadSection>
        <div className={styles.main}>
          <h1 className={styles.main__title}>Создание cайтов от Google партнеров</h1>
          <div className={styles.main__slider}>
            <Image src="/main.jpg" width="760" height="426" alt="" />
          </div>
        </div>
      </HeadSection>
      <div className={`container ${styles.main__container}`}>
        <div className={styles.main__text}>
          <ShortText name="Агенция">
            Занимаемся разработкой сайтов для бизнеса с 2013 года. За это время подобрали
            квалифицированных специалистов, которые готовы помочь клиентам в создании
            сайта любой сложности, а также внедрить в него все необходимые функции для
            высокой эффективности и результативности ведения вашего бизнеса.
          </ShortText>
        </div>
        <div className={styles.main__works}>
          <Works works={works} />
        </div>
        <div className={styles.main__reviews}>
          <Reviews reviews={reviews} />
        </div>
        <div className={styles.main__collapse}>
          <Collapse items={faq} />
        </div>
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

  reviews.splice(1, 0, { id: 'rating' });

  return {
    props: {
      works,
      reviews,
      faq,
    },
  };
}

export default Home;
