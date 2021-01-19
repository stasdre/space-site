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
          source: '/agency',
          destination: '/agency',
        },
        {
          source: '/:url',
          destination: '/services/:url',
        },
      ];
    },
  })
);
