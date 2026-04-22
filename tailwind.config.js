/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: "#F7F5F0", 50: "#FDFCFA", 100: "#F2EFE8", 200: "#E8E4DA" },
        navy: { DEFAULT: "#1F3A5F", 700: "#15294A", 800: "#0f1f3a", 900: "#0a1628", 400: "#4a6890" },
        teal: { DEFAULT: "#2B9D8F", 400: "#3dc4b4", 600: "#1f7b70" },
        orange: { DEFAULT: "#E8823A", 400: "#f29e5f", 600: "#c46b26" },
        lime: { DEFAULT: "#8BBE3D", 600: "#74a832", 700: "#5a8326" },
        indigo: { DEFAULT: "#5C5FE0", 400: "#7b7df0", 600: "#4a4dc7" },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float-slow": "float 18s ease-in-out infinite",
        "float-med": "float 14s ease-in-out infinite",
        "float-fast": "float 10s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        draw: "draw 1.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
