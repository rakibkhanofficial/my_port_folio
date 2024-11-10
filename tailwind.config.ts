import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     lg: "4rem",
    //     xl: "5rem",
    //     "2xl": "6rem",
    //   },
    // },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      padding: {
        "safe-area": "env(safe-area-inset-bottom)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
