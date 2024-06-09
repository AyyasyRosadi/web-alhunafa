import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        majala: ['majala', 'sans-serif'],
        bahij: ['bahij', 'sans-serif'],
        skrhead: ['skrhead', 'sans-serif'],
      },
      colors: {
        "base": "#082497"
      },
      backgroundColor: {
        "base": "#082497"
      }
    },
  },
  plugins: [],
};
export default config;
