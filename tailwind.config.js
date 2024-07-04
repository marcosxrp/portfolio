/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#021235',
        secondary: '#FEFAF6',
        third: '#EADBC8',
        fourth: '#DAC0A3'
      },
      fontFamily: {
        'main-font': ['"Roboto Serif"', 'sans-serif'],
      },
      animation: {
        'infinite-scroll-mobile': 'infinite-scroll-mobile 10s linear infinite',
        'infinite-scroll-sm': 'infinite-scroll-sm 8s linear infinite',
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll-mobile': {
          from: { transform: 'translateX(150%)' },
          to: { transform: 'translateX(-150%)' },
        },
        'infinite-scroll-sm': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(80%)' },
          to: { transform: 'translateX(-40%)' },
        }
      }
    },
  },
  plugins: [],
}

