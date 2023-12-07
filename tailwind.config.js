/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E51E0",
        "primary-dark": "#7f65e6",
        black: "#020617",
        lightGray: "#DBDBDB",
      },
      maxWidth: {
        authWidth: "504px",
      },
      padding: {
        p_153: "153px",
      },

      // Font size
      fontSize: {
        fs_18: "18px",
      },
    },
  },
  plugins: [],
};
