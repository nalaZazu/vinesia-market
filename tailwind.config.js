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
        themegray: "#F4F4F4",
        spacegray: "#41464b",
        /**market listing color  */

        availableGray: "#D9D9D9",
        themegray: "#F4F4F4",
        spacegray: "#41464b",
        typegray: "#6C757D",
        primary: "#41464B",
        secondary: "#000000",
        bgprimary: "#D9D9D9",
        bgsecondary: "#6C757D",
      },
    },
  },
  plugins: [],
};
