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
        availableGray: "#D9D9D9",
        themegray: "#F4F4F4",
        spacegray: "#41464b",
        bordergray: "#A0A6AC",
        tabsgray: "#C6C7C8",
        breadcrumb: '#9B9B9B',
        bgbutton: "#842029",
        typegray: "#6C757D",
        primary: "#41464B",
        secondary: "#000000",
        bgprimary: "#D9D9D9",
        bgsecondary: "#6C757D",
        bgtertiary:"#484848",
      
       
      },
      
      /** Font
       * FontsName:[fontSize, lineHeight]
       */
      fontSize: {
        xxs: ["10px", " 14.45px"],
        xxl: ["32px", "46.24px"],
      },

    },
  },
  plugins: [],
};
