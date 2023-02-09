/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "var(--yellow)",
        darkNavy: "var(--dark-navy)",
        dimGrey: "var(--dim-grey)",
        lightGrey: "var(--light-grey)",
        snow: "var(--snow)",
        lightYellow: "var(--light-yellow)",
      },
    },
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"],
    },
  },
  plugins: [],
};
