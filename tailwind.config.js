/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twitter: "rgb(var(--twitter-col) / <alpha-value>)",
        reddit: "rgb(var(--reddit-col) / <alpha-value>)",
      },

      //animation
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg) scale(1.2)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 800ms ease-in-out infinite",
      },

      backgroundImage: {
        try: 'url("https://assets.website-files.com/60d8b73075d915233e404041/60d8b73075d9155b1840405c_bg.jpg"        )',
      },
    },
  },
  plugins: [],
};
