/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector", // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27ac7d",
        secondary: "#4eb290",
        background: "#f3fbf9",
        text: "#76b8a3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
