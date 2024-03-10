/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      // project default font
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/src/assets/pattern.svg')",
        waves: "url('/src/assets/waves.svg')",
        headerBackground: "url('/src/assets/header-background.svg')",
        homelandingBackground: "url('/src/assets/home-landing-image.svg')",
        homeLandingBackgroundDesign:
          "url('/src/assets/home-landing-design.svg')",
        ctaBackgroundLaptop: "url('/src/assets/cta-background-laptop.svg')",
        valueOfProperty: "url('/src/assets/value-of-property-bg.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
