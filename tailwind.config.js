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
        secondary: "#FFD700",
        foreground2: "#EBFEFE",
        opposite: "#FE685E",
        black: "#181818",
        halfBlack: "#494949",
        selected: "#4949493e",
        selected2: "#f4f4f4",
        grays: "#818181",
        gray2: "#BDBDBD",
        gray1: "#CFCFCF",
        back: "#F4F4F4",
      },
      fontSize: {
        text1: "14px",
        text2: "12px",
      },
      lineHeight: {
        l1: "18px",
        l2: "12px",
      },
      width: {
        main: "1140px",
      },
    },
  },
  plugins: [],
};
