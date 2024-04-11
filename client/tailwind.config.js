/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "almost-black":"#161515",
        "brand-green":"#72E96F"
      }
    },
  },
  plugins: [],
};
