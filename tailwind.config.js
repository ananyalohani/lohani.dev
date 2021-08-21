const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        100: '28rem',
        110: '30rem',
        120: '34rem',
      },
      colors: {
        sky: colors.sky,
        gray: colors.blueGray,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
      },
      typography: {
        DEFAULT: {
          css: {
            margin: '5rem 0',
            h1: {
              color: colors.blueGray[800],
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ['Clear Sans', 'ui-sans-serif', 'system-ui'],
      body: ['Clear Sans', 'ui-sans-serif', 'system-ui'],
      display: ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
