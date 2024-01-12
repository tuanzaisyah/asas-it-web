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
      green: {
        100: "#D0FBE6",
        500: "#0F9D58",
      },
      red: {
        100: "#F4C6C2",
        500: "#EA3D2E",
      },
      orange: "#ED9682",
    },
    extend: {
      keyframes: {
        progress: {
          "0%": { width: "0%", height: "2px", background: "#0F9D58" },
          "79%": { width: "79%", height: "2px", background: "#0F9D58" },
          "80%": { width: "80%", height: "2px", background: "#EA3D2E" },
          "100%": { width: "100%", height: "2px", background: "#EA3D2E" },
        },
      },
      animation: {
        progress: "progress 10s linear ",
      },
    },
  },
  plugins: [],
};
