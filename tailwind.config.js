module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        white: { A700: "#ffffff", A700_db: "#ffffffdb", A700_fc: "#fffffffc", A700_bf: "#ffffffbf" },
        indigo: { A700_fc: "#1343effc", A700: "#0045fa", A700_01: "#0135e3" },
        blue: { 900: "#0047a6", "100_7f": "#c9e0ff7f", "900_01": "#0038a6", A400: "#0770fd" },
        light_blue: { A400: "#01b3f9" },
        gray: {
          700: "#666666",
          800: "#414141",
          "900_01": "#131313",
          "700_01": "#5b5b5b",
          "100_02": "#f6f7f9",
          "100_01": "#f6f6f7",
        },
      },
      boxShadow: { xs: "4px 6px  6px -8px #0000003f", bs: "inset 0px 0px  1px 1px #000000" },
      fontFamily: { istokweb: "Istok Web", poppins: "Poppins", abhayalibre: "Abhaya Libre" },
      backgroundImage: { gradient: "linear-gradient(90deg, #0046ff,#15274d89)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
