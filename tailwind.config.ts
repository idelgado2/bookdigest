import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#344955",
        secondaryHover: "#4A6572",
        primary: "#B9E4C9",
        primaryHover: "#FD5523",
      },
    },
  },
  plugins: [],
} satisfies Config;
