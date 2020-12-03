const autoprefixer = require('autoprefixer');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: '#1D4ED8',
              '&:hover': {
                color: '#059669',
              },
            },
            '.prose a.edit, .tag a': {
              color: '#333',
              'text-decoration': 'none',
            },
            '.prose h1': {
              'margin-bottom': 0,
            },
            '.prose-lg h1': {
              'margin-bottom': 0,
            },
            '.prose-xl h1': {
              'margin-bottom': 0,
            },
            // '.adjust  p img, .adjust img, .adjust p iframe, .adjust iframe, .twitter-tweet': {
            //   'text-align': 'center',
            //   'margin-left': 'auto',
            //   'margin-right': 'auto',
            //   'background-color': '#F8FAFC',
            //   'padding': '1em',
            //   'border-radius': '10px',
            // },
            // '.adjust p img:hover, .adjust p img:hover': {
            //   'background-color': '#F1F5F9'
            // },
            // '.text-align-center': {
            //   'width': 'auto',
            //   'margin': 'auto',
            //   'align': 'center'
            // },
            'ul.footer-nav': {
              '::before': {
                display: 'none',

              }
            }
            
          },
        },
      }
    },
  }, 
  variants: {},
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}

