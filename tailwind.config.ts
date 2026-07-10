import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Atlas'a yakın yeşil, modernize edilmiş emerald tonları
        halos: {
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#12b76a",
          600: "#039855",
          700: "#027a48",
          800: "#05603a",
          900: "#054f31",
        },
        ink: {
          900: "#0a0f0d",
          800: "#0d1512",
          700: "#111d18",
          600: "#16241e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1200px" },
      },
    },
  },
  plugins: [],
};

export default config;
