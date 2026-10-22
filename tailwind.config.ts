import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171A21",
        mist: "#F6F7FB",
        line: "#DDE2EB",
        accent: "#E93669",
        spotify: "#1DB954",
        sea: "#0F9F9A",
        sun: "#F5B84B"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 32, 52, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
