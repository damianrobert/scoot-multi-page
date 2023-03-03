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
    backgroundImage: {
      homeMobileHeader: "url('../assets/images/mobileHomeHeader.png')",
      homeHeader: "url('../assets/images/homeHeaderImage.png')",
      aboutHeader: "url('../assets/images/about-header.png')",
      mobileAboutHeader: "url('../assets/images/mobile-about-header.png')",
      careersHeader: "url('../assets/images/careers-header.png')",
      mobileCareersHeader: "url('../assets/images/mobile-careers-header.png')",
    },
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"],
    },
  },
  plugins: [],
};
