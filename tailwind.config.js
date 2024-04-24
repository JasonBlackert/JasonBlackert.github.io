/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.indigo.200'), 0 0 20px theme('colors.indigo.700')",
        low: "0 0 30px theme('colors.indigo.400')",
        high: "0 0 30px theme('colors.indigo.700')"
      }
    },
  },
  plugins: [],
}