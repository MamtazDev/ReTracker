/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E51E0",
        lightPrimary: "#F5F3FF",
        secondary: "#64748B",
        "primary-dark": "#7f65e6",
        'slate-black': "#020617",
        lightGray: "#DBDBDB",
        drakWhite: "#F8FAFC",
        primaryGreen: "#10B981",
        amber: "#F59E0B",
        orange: "#F97316",
        dark: "#0F172A",
        btnGradient: "linear-gradient(270deg, rgba(255, 255, 255, 0.16) 0%, rgba(0, 0, 0, 0.00) 100%, rgba(255, 255, 255, 0.00) 100%), #6E51E0);"
      },

      container: {
        center: true,
      },
      maxWidth: {
        twelveEighty: "1280px",
        authWidth: "540px",
      },
      padding: {
        p_153: "153px",
        p_276: "276px",
        p_236: "236px",
        p_228: "228px",
        p_188: "188px",
      },

      // Font size
      fontSize: {

      },

      // Line height
      lineHeight: {

      }
    },
  },
  plugins: [],
};
