/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./*.html",
        //'./node_modules/tw-elements/js/**/*.js',
        //"./node_modules/flowbite/**/*.js"
      ],
  //darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.indigo.200'), 0 0 20px theme('colors.indigo.700')",
        low: "0 0 5px theme('colors.indigo.400')",
      }
    },
  },
  plugins: [
    //require('tw-elements/plugin.cjs'),
    //require('flowbite/plugin.js')
  ],
}