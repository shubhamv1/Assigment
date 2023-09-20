module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700: "#ffffff" },
        gray: {
          700: "#616161",
          900: "#161615",
          "900_7f": "#1616157f",
          "900_01": "#191919",
        },
        black: { 900: "#000000" },
        yellow: { 900: "#f07e15", "900_6c": "#f07e156c" },
      },
      fontFamily: { syne: "Syne", worksans: "Work Sans", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
