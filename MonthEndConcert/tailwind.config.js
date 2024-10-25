/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#634682",
        secondary: "#6d8146",
        accent: "#DDD6FE",
        card_bg: "#66bb6a",
      },
    },
  },
  plugins: [],
};
