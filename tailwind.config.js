/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./app/js/script.js','./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        shadow: "'Vast Shadow', serif",
      },

      backgroundImage: {
        'bg_people': 'url(../assets/images/background.jpg)',
      }
    },
  },
  plugins: [],
}

