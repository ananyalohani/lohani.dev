const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        sky: colors.sky,
        gray: colors.blueGray,
        coolGray: colors.coolGray,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        orange: colors.orange,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            margin: '5rem 0',
            h1: {
              color: theme('colors.coolGray.800'),
            },
            h2: {
              color: theme('colors.coolGray.800'),
            },
            h3: {
              color: theme('colors.coolGray.800'),
            },
            h4: {
              color: theme('colors.coolGray.800'),
            },
            p: {
              color: theme('colors.coolGray.800'),
            },
            blockquote: {
              'p:first-of-type::before': {
                content: '"" !important',
              },
              'p:last-of-type::after': {
                content: '"" !important',
              },
              color: theme('colors.gray.700'),
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
