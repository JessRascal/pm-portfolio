const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        hd: '1920px',
        '4k': '2500px',
      },
      colors: {
        // for text colours
        high: 'rgba(255, 255, 255, 0.87)',
        medium: 'rgba(255, 255, 255, 0.6)',
        disabled: 'rgba(255, 255, 255, 0.38)',
        primary: colors.amber[400],
        highlight: colors.orange[600],
      },
    },
  },
  plugins: [],
};
