import { playfairDisplayRegular } from "@/app/fonts";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "white-lines":
          "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 16.66%)",
      },
      fontFamily: {
        mango: "var(--font-mango)",
        dmSans: "var(--font-dm-sans)",
        playfairDisplay: "var(--font-playfair-display)",
        playfairDisplayRegular : "var(--font-playfair-display-regular)",
        spaceGrotesk: "var(--font-space-grotesk)",
      },
    },
  },
  plugins: [],
};
export default config;
