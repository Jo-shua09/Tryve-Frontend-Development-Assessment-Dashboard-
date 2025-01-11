/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom1: "rgb(251, 251, 255)",
        custom2: "#555",
      },
      height: {
        custom: "calc(100vh - 50px)",
      },
    },
  },
  plugins: [],
};
