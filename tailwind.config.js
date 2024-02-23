/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'rhub-hero': "url('./back_hero.webp')",
      }
    },
  },
  plugins: [],
}