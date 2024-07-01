/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/"
  ],
  theme: {
    extend: {
      fontFamily:{
        Playwrite:"Playwrite GB S"
      }
    },
  },
  plugins: [],
}

