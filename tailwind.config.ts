import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "4.5": "1.125rem",
      },
      colors: {
        base: {
          deep: "#080C18",
          elevated: "#0F1830",
          surface: "#16213F",
          line: "#243056",
        },
        signal: {
          DEFAULT: "#3D8BFF",
          soft: "#7EB0FF",
          teal: "#17D7B0",
        },
        ember: {
          DEFAULT: "#FF7A45",
          soft: "#FFA679",
        },
        ink: {
          primary: "#F4F7FC",
          muted: "#93A0C2",
          faint: "#5C688C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(61,139,255,0.16), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(61,139,255,0.25)",
        card: "0 8px 30px rgba(3,6,16,0.45)",
      },
      keyframes: {
        pulseLine: {
          "0%": { strokeDashoffset: "240", opacity: "0" },
          "8%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "0" },
        },
        nodeGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-line": "pulseLine 4s ease-in-out infinite",
        "node-glow": "nodeGlow 3.2s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
