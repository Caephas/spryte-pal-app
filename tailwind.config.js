/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a0089",
        secondary: "#ff5e33",
        accent: "#b7cf4f",
        cream: "#fffaee",
      },
      fontFamily: {
        display: ['"Fredoka"', "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fall-slow": "fall 15s linear infinite",
        "fall-medium": "fall 10s linear infinite",
        "fall-fast": "fall 7s linear infinite",
        "sway-slow": "sway 4s ease-in-out infinite alternate",
        "sway-medium": "sway 3s ease-in-out infinite alternate",
        "sway-fast": "sway 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fall: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(100vh)" },
        },
        sway: {
          "0%": { transform: "translateX(-20px) rotate(-10deg)" },
          "100%": { transform: "translateX(20px) rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
