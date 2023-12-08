/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E51E0",
        "primary-dark": "#7f65e6",
        'slate-black': "#020617",
        lightGray: "#DBDBDB",
      },
      maxWidth: {
        authWidth: "540px",
      },
      padding: {
        p_153: "153px",
        p_276: "276px",
        p_236: "236px",
        p_228: "228px",
        p_188: "188px",
      },
    },
  },
  plugins: [],
};
