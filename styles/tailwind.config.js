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
  darkMode: false,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            'max-width': '100%',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
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
            '.adjust p img, .adjust img, .adjust p iframe, .adjust iframe, .twitter-tweet': {
              'text-align': 'center',
              'margin-left': 'auto',
              'margin-right': 'auto',
              'background-color': '#F3F4F6',
              'padding': '1em',
              'border-radius': '10px',
            },
            '.adjust p img:hover, .adjust p img:hover': {
              'background-color': '#E5E7EB'
            },
            
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

