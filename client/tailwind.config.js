/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#191a19',
      'background': '#fff',
      'primary': '#b1b4b1',
      'secondary': '#d0d2d0',
      'accent': '#696d69',
      'inherit': 'inherit',

      dark: {
        'text': '#e5e6e5',
        'background': '#050A09',
        'primary': '#4b4e4b',
        'secondary': '#2d2f2d',
        'accent': '#929692',
      }
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },

  },
  plugins: [],
}