/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satashi", "sans-serif"],
        inter: ["Inter", "sans-sefif"],
      }
    },
  },
  plugins: [],
}