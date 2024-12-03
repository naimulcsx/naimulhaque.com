const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    container: {
      center: true,
      padding: "24px"
    },
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.sky
      }
    }
  },
  plugins: [addVariablesForColors, require("@tailwindcss/typography")]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars
  });
}
