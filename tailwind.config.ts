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
        zutro: {
          950: "#080808",
          black: "#0F0F0F",
          dark: "#141416",
          card: "#18181C",
          "card-hover": "#222228",
          border: "#2A2A32",
          "border-gold": "rgba(212, 160, 23, 0.35)",
          gold: "#D4A017",
          "gold-light": "#F3CE65",
          "gold-dark": "#A67C12",
          "gold-glow": "rgba(212, 160, 23, 0.2)",
          cream: "#F9F8F6",
          muted: "#9E9EA7",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4A017 0%, #F5D061 50%, #D4A017 100%)",
        "gold-gradient-subtle": "linear-gradient(135deg, rgba(212,160,23,0.15) 0%, rgba(245,208,97,0.05) 50%, rgba(212,160,23,0.15) 100%)",
        "radial-dark": "radial-gradient(circle at 50% 30%, #1c1c22 0%, #0f0f0f 70%, #080808 100%)",
        "radial-gold": "radial-gradient(circle at 50% 50%, rgba(212,160,23,0.12) 0%, rgba(15,15,15,0) 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 160, 23, 0.25)",
        "gold-glow-lg": "0 0 50px rgba(212, 160, 23, 0.35)",
        "luxury": "0 20px 50px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 15px rgba(212, 160, 23, 0.4)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 30px rgba(212, 160, 23, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
