const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black21: { 100: "#212121", 200: "#000000" },
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      fuchsia: colors.fuchsia,
      slate: colors.slate,
      zinc: colors.zinc,
      sky: colors.sky,
    },
  },
  plugins: [],
};
