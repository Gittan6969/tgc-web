import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10b981" // emerald
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
} satisfies Config;
