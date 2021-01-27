import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import getT from 'next-translate/getT';

import { PageHeader } from '../../components/UI/PageHeader';
import WorksLoaded from '../../components/Sections/Works/WorksLoaded';
import styles from './Works.module.css';

const Works = ({ data, breadcrumbsItems, apiUrl }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('works');

  return (
    <>
      <Head>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_desc')} />
        <meta name="title" content={t('meta_title')} />
        <link rel="alternate" hreflang="ru" href="/space-site/raboty-studii" />
        <link rel="alternate" hreflang="en" href="/en/space-site/raboty-studii-eng" />
        <link rel="alternate" hreflang="uk" href="/uk/space-site/portfolio" />
      </Head>
      <div className="container">
        <PageHeader title={t('title')} breadcrumbs={breadcrumbsItems} />
        <section className={styles.works}>
          <WorksLoaded initialData={data} link={`${apiUrl}api/works/lang/${locale}`} />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  const t = await getT(locale, 'works');
  const tC = await getT(locale, 'common');
  const res = await fetch(`${process.env.API_URL}/api/works/lang/${locale}`);
  const { data } = await res.json();
  const breadcrumbsItems = [{ name: tC('main'), link: '/' }, { name: t('breadcrumbs') }];

  return {
    props: {
      data,
      breadcrumbsItems,
      apiUrl: process.env.SITE_URL,
    },
    revalidate: 10,
  };
}

export default Works;
