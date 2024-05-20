import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueLigth: "#3B0CF6",
        blueDark: "#151423",
        blueDarkOpacity3: "#202038",
        blueDarkOpacity4: "#212136",
        blueDarkOpacity5: "#1a1a33",
        gray: "#aaaaaa",
        shadow: "rgba(0, 0, 0, 0.7)",
        shadowLigtgh: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
