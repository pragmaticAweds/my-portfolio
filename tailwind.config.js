/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ["Hind\\ Siliguri", "sans-serif"],
        satisfy: ["Satisfy", "sans-serif"],
        bebas: ["Bebas\\ Neue", "cursive"],
      },
      backgroundColor: {
        "pj-bg": "#C1E5C0",
        "pj-bg2": "#192d49",
        "txt-grey": "#b9b9b9",
      },
    },
  },
  plugins: [],
};
