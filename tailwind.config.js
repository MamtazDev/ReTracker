/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E51E0",
        secondary:"#64748B",
        "primary-dark": "#7f65e6",
        'slate-black': "#020617",
        lightGray: "#DBDBDB",
        drakWhite: "#F8FAFC",
        primaryGreen: "#10B981",
        amber: "#F59E0B",
        orange: "#F97316"
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
