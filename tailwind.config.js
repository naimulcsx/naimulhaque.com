/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111",
        primary: "#06b3e2",
        card: "#2c2c32",
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
            color: "#9ca3af",
            em: { color: "#d1d5db" },
            p: { color: "#9ca3af" },
            h1: { color: "#fff" },
            h2: { color: "#fff" },
            h3: { color: "#fff" },
            h4: { color: "#fff" },
            h5: { color: "#fff" },
            h6: { color: "#fff" },
            code: {
              color: "#d1d5db",
              "&::before": { display: "none" },
              "&::after": { display: "none" },
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
