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
      }
    },
  },
  plugins: [],
}

