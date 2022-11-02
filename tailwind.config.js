const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        hd: '1920px',
        '4k': '2500px',
        touch: { raw: '(pointer: coarse)' },
        'not-touch': { raw: '(pointer: fine)' },
      },
      colors: {
        // for text colours
        heading: colors.slate[50],
        high: colors.slate[300],
        medium: colors.slate[400],
        disabled: colors.slate[500],
        primary: colors.amber[400],
        'primary-light': colors.amber[200],
        'primary-dark': colors.amber[600],
        highlight: colors.orange[600],
      },
    },
  },
  safelist: ['text-primary-light'],
  plugins: [],
};
