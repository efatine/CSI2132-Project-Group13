/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'basic':'#003b95'
      },
      screens:{
        'lg':'900px'
      }
    },
  },
  plugins: [],
}