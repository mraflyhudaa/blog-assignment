/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-bg': '#fffffe',
        'blue-bg': '#d8eefe',
        headline: '#094067',
        paragraph: '#5f6c7b',
        primary: '#3da9fc',
        'primary-hover': '#348dd1',
        secondary: '#90b4ce',
        tertiary: '#ef4565',
        'tertiary-hover': '#c73a54',
        'button-text': '#fffffe',
        stroke: '#094067',
        main: '#fffffe',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
