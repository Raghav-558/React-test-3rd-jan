/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#737376",
        "dark-black": "#222222",
        "primary-gray": "#F5F9FC"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px',
      }
    },
  },
  plugins: [],
}