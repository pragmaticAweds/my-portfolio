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
    },
  },
  plugins: [],
};
