/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        normalText :[ 'Afacad',' sans-serif'],
        titleText :['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

