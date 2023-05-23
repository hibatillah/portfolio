const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        outfit: ["'Outfit'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: '#1F1F1F',
        lightGrey: '#DCDCDC',
        darkGrey: '#8D8D8D',
        primary: '#344153'
      }
    },
  },
  plugins: [],
}

