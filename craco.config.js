module.exports = {
    style: {
      postcss: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss/nesting'),
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }