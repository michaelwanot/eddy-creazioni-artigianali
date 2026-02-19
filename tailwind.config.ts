import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sage: "#5E6F5B",
          terracotta: "#C97C5D",
          ivory: "#F6F2EC",
          beige: "#E8DFD3",
          blush: "#E6C7C2",
          ink: "#2A2A2A",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
