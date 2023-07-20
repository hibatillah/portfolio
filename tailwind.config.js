const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      outfit: ["'Outfit'", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        dark: "#1F1F1F",
        primary: "#344153",
        grey: {
          light: "#DCDCDC",
          dark: "#8D8D8D",
        },
      },
    },
  },
  plugins: [],
};
