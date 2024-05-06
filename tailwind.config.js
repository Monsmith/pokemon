const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        grayCart: "#2b2a34",
        grayCard: "#1c1b26",
        priceText: "#ABBBC2",
        disabledText: "#78777e",
        addToCartHoverText: "#3e3d47",
      }
    },
  },
  plugins: [],
}

