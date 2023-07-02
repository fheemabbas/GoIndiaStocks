module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Add an extra small screen breakpoint at 480px
        'xsm': '400px', // Add an extra small screen breakpoint at 480px
      },
    },
  },
  plugins: [],
};
