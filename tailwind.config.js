module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1': '1 1 0%',
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
      },
      skew: {
        '30': '30deg',
        '-30': '-30deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
