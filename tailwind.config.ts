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
        coral: {
          DEFAULT: "#FF6B35",
          50: "#FFF3EE",
          100: "#FFE5D5",
          200: "#FFCAAA",
          300: "#FFAE80",
          400: "#FF8D55",
          500: "#FF6B35",
          600: "#E54E1A",
          700: "#C03D10",
          800: "#9A2F0C",
          900: "#7A2409",
        },
        navy: {
          DEFAULT: "#1A2B4A",
          50: "#E8EDF5",
          100: "#C5D0E4",
          200: "#8FA2C7",
          300: "#5A75AB",
          400: "#304F8A",
          500: "#1A2B4A",
          600: "#15223C",
          700: "#10192D",
          800: "#0A101E",
          900: "#05080F",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
