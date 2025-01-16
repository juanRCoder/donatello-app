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
        primary_200: '#c2402a',
        bg_100: '#1A1A1A',
        bg_200: '#292929',
        bg_300: "#404040",
        // --primary-100:#8B0000;
        // --primary-200:#c2402a;
        // --primary-300:#ffa282;
        // --accent-100:#FF4500;
        // --accent-200:#ffe49a;
        // --text-100:#FFFFFF;
        // --text-200:#e0e0e0;
      }
    },
  },
  plugins: [],
} satisfies Config;
