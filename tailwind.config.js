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
        high: 'rgba(255, 255, 255, 0.87)',
        medium: 'rgba(255, 255, 255, 0.6)',
        disabled: 'rgba(255, 255, 255, 0.38)',
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
