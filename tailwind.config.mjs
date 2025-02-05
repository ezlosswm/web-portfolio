const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "eastern-blue": {
          50: "#ecffff",
          100: "#cefdff",
          200: "#a3f8fe",
          300: "#63f0fd",
          400: "#1ddef3",
          500: "#01c1d9",
          600: "#04a1bf",
          700: "#0b7b93",
          800: "#136277",
          900: "#145265",
          950: "#073645",
        },
        "cod-gray": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#0d0d0d",
        },
        vblue: {
          100: "#04ADE2",
          200: "#04A1BF",
          300: "#17DEEE",
          400: "#00B0FF",
        },
      },
      animation: {
        fadeOut: "fadeOut 0.6s linear",
        animateGradient: "animateGradient 15s ease infinite alternate",
      },
      backgroundSize: {
        300: "300%",
      },
      keyframes: {
        animateGradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
