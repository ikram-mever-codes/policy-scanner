/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00615F",
        primary2: "#007f73",
        secondary: "#FCC600",
        foreground2: "#EBFEFE",
        opposite: "#FE685E",
        black: "#181818",
        halfBlack: "#494949",
        selected: "#4949493e",
        selected2: "#f4f4f4",

        gray: "#818181",
        gray2: "#BDBDBD",
        gray1: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
