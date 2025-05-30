/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [],
  variants: {
      extend: {
          display: ["group-hover"],
      },
  },
};