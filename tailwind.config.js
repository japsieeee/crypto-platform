/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-1": "#0D0D0D",
        "main-2": "#212325",
        "sub-1": "#909093",
        "sub-2": "#A1A1A1",
        "sub-3": "#1A1D1E",
        "green-1": "#2DC24E",
        "green-2": "#77ED91",
        "red-1": "#F92C2C",
        sidebar: "#151617",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
