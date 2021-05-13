const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    colors
  },
  variants: {
    extend: {}
  },
  plugins: []
}
