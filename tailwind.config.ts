import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B1240",
        accent: "#D88BA0",
        highlight: "#C9A66B",
        background: "#EDE6F2",
        "background-alt": "#F1E9EE",
        surface: "#E8DFF0",
        text: "#231120",
        "text-muted": "#5A3D6B",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        50: "12.5rem",
        54: "13.5rem",
        58: "14.5rem",
        62: "15.5rem",
        66: "16.5rem",
        70: "17.5rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        soft: "0 2px 20px 0 rgba(59, 18, 64, 0.06)",
        card: "0 4px 32px 0 rgba(59, 18, 64, 0.08)",
        "card-hover": "0 12px 48px 0 rgba(59, 18, 64, 0.14)",
        glow: "0 0 40px 0 rgba(201, 166, 107, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-silk":
          "linear-gradient(135deg, #EDE6F2 0%, #F1E9EE 50%, #E8DFF0 100%)",
        "gradient-regal":
          "linear-gradient(135deg, #3B1240 0%, #5C1D65 50%, #3B1240 100%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      transitionDuration: {
        "350": "350ms",
        "400": "400ms",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in": "fadeIn 0.5s ease both",
        shimmer: "shimmer 2.5s infinite linear",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
