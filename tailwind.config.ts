import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          400: "#8B5CF6",
          500: "#7C3AED",
          600: "#5B21B6",
          700: "#4C1D95",
        },
        ink: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          400: "#9CA3AF",
          500: "#6B7280",
          700: "#374151",
          900: "#111827",
        },
        status: {
          pending: "#F59E0B",
          sent: "#3B82F6",
          due: "#8B5CF6",
          overdue: "#EF4444",
          paid: "#10B981",
        },
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
