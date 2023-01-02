/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
      animation: {
        "spin-slow": "spin 0.6s linear reverse"
      }
    },
    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      white: "#fff",
      cyan: "#F0B90B",
      red: "#d6436e",
      green: "#25da72"
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px"
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
