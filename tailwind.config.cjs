/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // dark base
        accent: "#064e3b", // green
        wine: "#7f1d1d", // red wine
      },
    },
  },
  plugins: [],
};
