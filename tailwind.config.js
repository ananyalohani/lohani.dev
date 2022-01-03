const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        neg: -10,
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      width: {
        100: '28rem',
        110: '30rem',
        120: '34rem',
      },
      colors: {
        ...colors,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            margin: '5rem 0',
            h1: {
              color: theme('colors.gray.800'),
            },
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            h4: {
              color: theme('colors.gray.800'),
            },
            p: {
              color: theme('colors.gray.800'),
            },
            blockquote: {
              'p:first-of-type::before': {
                content: '"" !important',
              },
              'p:last-of-type::after': {
                content: '"" !important',
              },
              color: theme('colors.slate.700'),
            },
            code: {
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
              fontWeight: 500,
              color: '',
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      body: ['Inter', 'ui-sans-serif', 'system-ui'],
      display: ['Barlow', 'ui-sans-serif', 'system-ui'],
      code: ['Fira Code', 'monospace'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
