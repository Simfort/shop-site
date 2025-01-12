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
      keyframes:{
        opening:{
          '0%':{
            opacity:'0'
          },
          '100%':{
            opacity:'1'
          }
        },
        closing:{
          '0%':{
            opacity:'1'
          },
          '100%':{
            opacity:'0',
            display:'none'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
