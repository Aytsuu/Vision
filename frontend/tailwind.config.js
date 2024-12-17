const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      serif: defaultTheme.fontFamily.serif,
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}