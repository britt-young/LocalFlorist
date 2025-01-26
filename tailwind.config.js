/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#404045', // light purple
        'secondary': '#9F9FAB', // dark purple
        'tertiary': '#E1E0DA', // neutral cream
        'light': '#F8F8F8', // white-ish
        'dark': '#000000', // black
      },
    },
  },
  plugins: [],
}
