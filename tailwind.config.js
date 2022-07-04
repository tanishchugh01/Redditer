/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twitter: 'rgb(var(--twitter-col) / <alpha-value>)',
        reddit: 'rgb(var(--reddit-col) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
