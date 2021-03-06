import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { Breadcrumbs } from '@/components/Sections';

import menu from '../../../nav';

const Porfolio = ({ work, breadcrumbsItems }) => {
  const { defaultLocale, locale } = useRouter();
  const profileUrl = locale === 'ru' ? '/portfolio/' : '/space-site/';

  return (
    <>
      <Head>
        <title>{work.meta_title}</title>
        <meta name="description" content={work.meta_desc} />
        <meta name="title" content={work.meta_title} />
        {work.alternateURLs.map((item) => {
          return (
            <link
              key={item.url}
              rel="alternate"
              hrefLang={item['Lang.code']}
              href={
                item['Lang.code'] !== defaultLocale
                  ? `/${item['Lang.code']}/space-site/${item.url}`
                  : `/portfolio/${item.url}`
              }
            />
          );
        })}
      </Head>
      <div className="container">
        <div>
          <Breadcrumbs items={breadcrumbsItems} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '70%',
            height: '500px',
          }}
        >
          <Image src={work.img} layout="fill" objectFit="cover" />
        </div>
        <div>
          <Link href={profileUrl + work.prevWork.url}>
            <a>{work.prevWork.name}</a>
          </Link>
          <Link href={profileUrl + work.nextWork.url}>
            <a>{work.nextWork.name}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/works/paths`);
  const { works } = await res.json();

  const paths = works.map((item) => ({
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
  const res = await fetch(
    `${process.env.API_URL}/api/works/${encodeURI(params.url)}/${locale}`
  );
  const { work } = await res.json();
  const navItemData = menu[locale].find((item) => item.uuid === 'works');
  const breadcrumbsItems = [
    { name: 'Главная', link: '/' },
    {
      name: navItemData.name,
      link: navItemData.link,
    },
    { name: work.name !== undefined ? work.name : '' },
  ];

  return {
    props: {
      work,
      breadcrumbsItems,
    },
    revalidate: 10,
  };
}
export default Porfolio;
