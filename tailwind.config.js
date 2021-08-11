const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/lib/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/styles/**.css',
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
        sky: colors.lightBlue,
        gray: colors.blueGray,
      },
    },
    fontFamily: {
      sans: ['Clear Sans', 'Source Sans Pro', 'ui-sans-serif', 'system-ui'],
      body: ['Clear Sans', 'Source Sans Pro', 'ui-sans-serif', 'system-ui'],
      display: ['Clear Sans', 'Source Sans Pro', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
