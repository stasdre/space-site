import Image from 'next/image';
import { HeadSection } from '@/components/HeadSection';
import { ShortText } from '@/components/ShortText';
import styles from './Index.module.css';
import { Works } from '@/components/Works';

const Home = ({ works }) => {
  return (
    <>
      <HeadSection>
        <div className={styles.main}>
          <h1 className={styles.main__title}>Создание cайтов от Google партнеров</h1>
          <Image src="/main.jpg" width="760" height="426" alt="" />
        </div>
      </HeadSection>
      <div className={`container ${styles.main__container}`}>
        <div className={styles.main__text}>
          <ShortText name="Агенция">
            Занимаемся разработкой сайтов для бизнеса с 2013 года. За это время подобрали квалифицированных
            специалистов, которые готовы помочь клиентам в создании сайта любой сложности, а также внедрить в него все
            необходимые функции для высокой эффективности и результативности ведения вашего бизнеса.
          </ShortText>
        </div>
        <div className={styles.main__works}>
          <Works works={works} />
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
  return {
    props: {
      works,
    },
  };
}

export default Home;
