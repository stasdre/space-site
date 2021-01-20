import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import getT from 'next-translate/getT';
import Link from 'next/link';

import { ContactsSection, HeadSection } from '@/components/Layouts';
import { Head as HeadPage } from '@/components/Pages/AllServices';
import { Breadcrumbs } from '@/components/Sections';

import styles from './Services.module.css';

const AllServices = ({ breadcrumbsItems, categories }) => {
  const { t } = useTranslation('service');
  return (
    <>
      <Head>
        <title>
          Веб Услуги, Цена — услуги Web компании/фирмы | Киев, Харьков, Одесса, Днепр
        </title>
        <meta
          name="description"
          content="Заказать веб услуги компании по дизайну, созданию и верстке сайтов. Студия №1 в Украине. Делаем качественно в сроки. Полный спектр услуг. Жмите!"
        />
      </Head>

      <div className="container">
        <div className={styles.services__breadcrumbs}>
          <Breadcrumbs items={breadcrumbsItems} />
        </div>

        <HeadSection>
          <HeadPage title={t('title')} />
        </HeadSection>
        <div className={styles.services}>
          {categories.map((cat) => (
            <div key={cat.id}>
              <div className={styles.services__title}>{cat.name}</div>
              <ul className={styles.services__list}>
                {cat.services.map((serv) => (
                  <li className={styles.services__item} key={serv['Service.id']}>
                    <Link href={serv.url}>
                      <a className={styles.services__link}>{serv.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <section className={styles.services__contacts}>
          <ContactsSection />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  const t = await getT(locale, 'service');
  const res = await fetch(`${process.env.API_URL}/api/categories/services/${locale}`);
  const { data } = await res.json();
  const breadcrumbsItems = [{ name: 'Главная', link: '/' }, { name: t('breadcrumbs') }];

  return {
    props: {
      categories: data,
      breadcrumbsItems,
    },
  };
}

export default AllServices;
