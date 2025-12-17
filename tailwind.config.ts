import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f6",
          100: "#e3e7e3",
          200: "#c7d0c7",
          300: "#a3b1a3",
          400: "#7d8f7d",
          500: "#5d7360",
          600: "#4a5d4d",
          700: "#3d4a40",
          800: "#333d35",
          900: "#2d332e",
        },
        cream: {
          50: "#fffdf9",
          100: "#fef9f0",
          200: "#fdf3e1",
        },
        forest: {
          600: "#2D5A4D",
          700: "#24483e",
          800: "#1b362f",
        },
        terracotta: {
          400: "#d4956a",
          500: "#C17F59",
          600: "#a86b48",
        },
      },
    },
  },
  plugins: [],
};

export default config;
