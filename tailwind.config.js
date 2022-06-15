/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html}"],
  theme: {
    extend: {
      colors: {
        'customOrange': '#FD4C00',
        'customLightOrange': '#fc763d',
        'customGreen': '#005a00',
      },
    },
  },
  plugins: []
}
