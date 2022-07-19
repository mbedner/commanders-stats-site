/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Teko", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5A1415",
        secondary: "#FFB613",
      },
      backgroundImage: {
        heroImg: "url('../public/assets/hero-burgundy-background-image.jpeg')",
      },
    },
  },
  plugins: [],
};
