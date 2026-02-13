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
          beige: "#D9CEEB",
          cream: "#F6EEE1",
          pink: "#F1D6D0",
          sage: "#6F8469",
          "sage-light": "#86AC8D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
