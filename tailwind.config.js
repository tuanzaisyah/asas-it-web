/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#FCFCFC",
        400: "#F0F0F0",
      },
      slate: {
        100: "#D9D9D9",
        300: "#8C8C8C",
        500: "#4D4D4C",
        900: "#2B2B2B",
      },
      orange: "#ED9682",
    },
    extend: {},
  },
  plugins: [],
};
