/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mob: "320px",
      tab: "481px",
      lap: "769px",
      pc: "1025px",
      tv: "1201px",
    },
    extend: {
      fontFamily: {
        "nunito-sans": [`var(--font-nunito-sans)`],
      },
    },
  },
  plugins: [],
};
