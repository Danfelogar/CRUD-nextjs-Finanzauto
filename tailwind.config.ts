import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          "button-blue": "#1a73e8",
          "button-blue-hover": "#5195ee",
          "logo-blue": "#4285f4",
        },
        "custom-purple-light": "#dedeff",
        "custom-purple": "#4a00ff",
        "custom-dark": "#0c0909",
        "custom-gray-50": "#f4f4f4",
        "custom-gray-60": "#dbdbdb",
        "custom-gray-70": "#b2b2b2",
        "custom-gray-120": "#333333a3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
