/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E51E0",
        black: "#020617",
      },

      // Font size
      fontSize: {
        fs_18: "18px",
      },
    },
  },
  plugins: [],
};
