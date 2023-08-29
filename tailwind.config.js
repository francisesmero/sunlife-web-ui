/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'src/components/**/*.{html,js}',
  'src/pages/**/*.{html,js}',
  'src/index.html'],
  theme: {
    extend: {
      colors: {
        "light-primary": "#FFCB05",
        "light-secondary": "#003946",
        "light-gradient": "#FFCB05"
      }
    },
  },
  plugins: [],
}