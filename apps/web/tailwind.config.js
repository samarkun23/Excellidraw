/** @type {import('tailwindcss').Config} */
import uiConfig from "../../packages/ui/tailwind.config";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",  // include UI package

  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [uiConfig]
}

