import Head from 'next/head';
import { useRouter } from 'next/router';
import getT from 'next-translate/getT';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import lazySizes from 'lazysizes';
lazySizes.cfg.lazyClass = 'lazy';

import { ContactsSection } from '@/components/Layouts';
import styles from './Services.module.css';

import { Works } from '@/components/Sections/Works';
import { AboutVideo } from '@/components/Sections/AboutVideo';
import { SpaceSite } from '@/components/Pages/Home/SpaceSite';
import { ServiceDesc } from '@/components/Sections/ServiceDesc';
import { PageHeader } from '@/components/UI/PageHeader';
import menu from '../../../nav';

const Services = ({ breadcrumbsItems, service }) => {
  const { defaultLocale } = useRouter();
  return (
    <>
      <Head>
        <title>{service.meta_title}</title>
        <meta name="description" content={service.meta_desc} />
        <meta name="title" content={service.meta_title} />
        {service.alternateURLs.map((item) => (
          <link
            key={item.url}
            rel="alternate"
            hrefLang={item['Lang.code']}
            href={
              item['Lang.code'] !== defaultLocale
                ? `/${item['Lang.code']}/${item.url}`
                : item.url
            }
          />
        ))}
      </Head>
      <div className="container">
        <PageHeader title={service.h1} breadcrumbs={breadcrumbsItems} />
      </div>
      <section className={`container container__padding ${styles.service__section}`}>
        <div className="bordered-container">
          <h2 className={styles.service__title}>{service.h2}</h2>

          {service.video_url && (
            <div className={styles.service__video}>
              <AboutVideo
                title={service.video_name}
                src={service.video_prev}
                url={service.video_url}
              />
            </div>
          )}

          {service.description && (
            <div className={styles.service__desc}>
              <SpaceSite data={service.description} />
            </div>
          )}
          <div className={styles.service__form}>
            <ContactsSection />
          </div>
        </div>

        <div className={`bordered-container ${styles.service__content}`}>
          <ServiceDesc service={service} />
        </div>

        {service.works.length !== 0 && (
          <div className={`bordered-container`}>
            <div className={styles.service__works}>
              <div className="section__title">Работы</div>
              <Works works={service.works} />
            </div>
          </div>
        )}

        <div className={styles.service__form_bottom}>
          <ContactsSection />
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/services/paths`);
  const { services } = await res.json();

  const paths = services.map((item) => ({
    params: {
      url: item.url,
    },
    locale: item['Lang.code'],
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const tC = await getT(locale, 'common');
  const res = await fetch(
    `${process.env.API_URL}/api/services/${encodeURI(params.url)}/${locale}`
  );
  const { service } = await res.json();

  const navItemData = menu[locale].find((item) => item.uuid === 'services');
  const breadcrumbsItems = [
    { name: tC('main'), link: '/' },
    {
      name: navItemData.name,
      link: navItemData.link,
    },
    { name: service.category, link: '#' },
    { name: service.name !== undefined ? service.name : '' },
  ];

  service.links = [
    { id: 1, title: 'Интернет-магазин, который продает' },
    { id: 2, title: 'Современный продающий дизайн' },
    { id: 3, title: 'Быстрая выгрузка товаров через плагины' },
    { id: 4, title: 'Интернет-магазин, который продает' },
    { id: 5, title: 'Современный продающий дизайн' },
    { id: 6, title: 'Быстрая выгрузка товаров через плагины' },
  ];

  return {
    props: {
      breadcrumbsItems,
      service,
    },
    revalidate: 10,
  };
}

export default Services;
