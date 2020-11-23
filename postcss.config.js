module.exports = {
  plugins: {
    'postcss-import': {
      path: ['src/assets/css'],
    },
    'postcss-normalize': {},
    'postcss-utilities': {},
    'postcss-pr': {},
    'postcss-inline-svg': { paths: ['./src/assets/icons'] },
    'postcss-preset-env': {
      stage: 0,
      preserve: false,
      importFrom: [
        'src/assets/css/utils/vars.css',
        'src/assets/css/utils/breakpoints.css',
      ],
    },
    'postcss-font-magician': {
      custom: {
        ibmplexsans: {
          variants: {
            normal: {
              100: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-thin-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-thin-webfont.woff',
                },
              },
              300: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-light-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-light-webfont.woff',
                },
              },
              400: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-regular-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-regular-webfont.woff',
                },
              },
              500: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-medium-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-medium-webfont.woff',
                },
              },
              700: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-bold-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-bold-webfont.woff',
                },
              },
            },
            italic: {
              100: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-thinitalic-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-thinitalic-webfont.woff',
                },
              },
              300: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-lightitalic-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-lightitalic-webfont.woff',
                },
              },
              500: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-mediumitalic-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-mediumitalic-webfont.woff',
                },
              },
              700: {
                url: {
                  woff2: '../../assets/fonts/ibmplexsans-bolditalic-webfont.woff2',
                  woff: '../../assets/fonts/ibmplexsans-bolditalic-webfont.woff',
                },
              },
            },
          },
        },
      },
      display: 'swap',
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
};
