/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0C0A09",
        primary: "#FACC15",
        card: "#292524",
      },
      animation: {
        wave: "wave 2.5s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(14deg)",
          },
          "20%": {
            transform: "rotate(-8deg)",
          },
          "30%": {
            transform: "rotate(14deg)",
          },
          "40%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(0deg)",
          },
          100: {
            transform: "rotate(0deg)",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#a3a3a3",
            em: { color: "#d4d4d4" },
            p: { color: "#a3a3a3" },
            h1: { color: "#f5f5f5" },
            h2: { color: "#e5e5e5" },
            h3: { color: "#e5e5e5" },
            h4: { color: "#e5e5e5" },
            h5: { color: "#e5e5e5" },
            h6: { color: "#e5e5e5" },
            code: {
              color: "#d1d5db",
              "&::before": { display: "none" },
              "&::after": { display: "none" },
            },
            pre: {
              background: "#29252480",
            },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
