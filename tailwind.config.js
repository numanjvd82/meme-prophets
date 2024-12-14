/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredoka: ["Fredoka One", "cursive"],
      },
      backgroundImage: {
        bgPattern: "url('/img/bg.svg')",
        wavePattern: "url('/img/wave.svg')",
      },
      colors: {
        primary: "#FFAA00",
        secondary: "#3671BF",
      },
    },
  },
  plugins: [],
};
