/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#41464B",
        secondary: "#000000",
        availprimary: "#D9D9D9",
        availsecondary: "#6C757D",
      },     
    },
  },
  plugins: [],
};
