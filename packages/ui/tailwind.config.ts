import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",  // package ui content
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
