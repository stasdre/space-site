import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import getT from 'next-translate/getT';

import { ContactsSection, HeadSection } from '@/components/Layouts';
import { ServicesList } from '@/components/Sections/ServicesList';
import { PageHeader } from '@/components/UI/PageHeader';

import styles from './Services.module.css';

const AllServices = ({ breadcrumbsItems, categories }) => {
  const { t } = useTranslation('service');
  return (
    <>
      <Head>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
        <meta name="title" content={t('meta_title')} />
        <link rel="alternate" hrefLang="uk" href="/uk/веб-послуги-ціна" />
        <link rel="alternate" hrefLang="en" href="/en/services-prices" />
        <link rel="alternate" hrefLang="ru" href="/веб-услуги-цена" />
      </Head>

      <div className="container">
        <PageHeader title={t('title')} breadcrumbs={breadcrumbsItems} />

        <div className={`bordered-container ${styles.service__list}`}>
          <ServicesList initialItems={6} list={categories} />
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
  const tC = await getT(locale, 'common');
  const res = await fetch(`${process.env.API_URL}/api/categories/services/${locale}`);
  const { data } = await res.json();
  const breadcrumbsItems = [{ name: tC('main'), link: '/' }, { name: t('breadcrumbs') }];

  return {
    props: {
      categories: data,
      breadcrumbsItems,
    },
    revalidate: 10,
  };
}

export default AllServices;
