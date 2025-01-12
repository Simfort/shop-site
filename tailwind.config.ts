import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation:{
        'spin-ball':'spin 3s linear infinite'
      },
      keyframes:{
        spin:{
          '0%':{
            transform:'rotate(0)'
          },
          '100%':{
            transform:'rotate(360deg)'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
