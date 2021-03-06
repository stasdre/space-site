const nextTranslate = require('next-translate');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(
  nextTranslate({
    async rewrites() {
      return [
        {
          source: encodeURI('/веб-услуги-цена'),
          destination: '/all-services',
        },
        {
          source: '/en/services-prices',
          destination: '/en/all-services',
          locale: false,
        },
        {
          source: encodeURI('/uk/веб-послуги-ціна'),
          destination: '/uk/all-services',
          locale: false,
        },
        {
          source: '/portfolio/speis',
          destination: '/works',
        },
        {
          source: '/en/space-site/raboty-studii-eng',
          destination: '/en/works',
          locale: false,
        },
        {
          source: encodeURI('/uk/space-site/portfolio'),
          destination: '/uk/works',
          locale: false,
        },
        {
          source: '/agency',
          destination: '/agency',
        },
        {
          source: '/en/space-site/:url',
          destination: '/en/portfolio/:url',
          locale: false,
        },
        {
          source: '/uk/space-site/:url',
          destination: '/uk/portfolio/:url',
          locale: false,
        },
        {
          source: '/en/website-creation',
          destination: '/en/',
          locale: false,
        },
        {
          source: encodeURI('/uk/створення-сайтів'),
          destination: '/uk/',
          locale: false,
        },
        {
          source: '/:url',
          destination: '/services/:url',
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/en',
          destination: '/en/website-creation',
          locale: false,
          permanent: true,
        },
        {
          source: '/uk',
          destination: '/uk/створення-сайтів',
          locale: false,
          permanent: true,
        },
      ];
    },
  })
);
