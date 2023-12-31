/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        availableGray: "#D9D9D9",
        themegray: "#F4F4F4",
        spacegray: "#41464b",
        bordergray: "#A0A6AC",
        tabgray: "#C6C7C8",
        breadcrumb: "#9B9B9B",
        bgbutton: "#842029",
        typegray: "#6C757D",
        primary: "#41464B",
        secondary: "#000000",
        bgprimary: "#D9D9D9",
        bgsecondary: "#6C757D",
        bgtertiary: "#484848",
        iconcolor: "#7A7C7F",
      },
      fontSize: {
        xxs: ["10px", " 14.45px"],
        xxl: ["32px", "46.24px"],
      },
      container: {
        maxWidth: {
          "2xl": "1280px",
        },
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "1rem", // Small screen padding
          lg: "1rem", // Large screen padding
          xl: "1rem", // Extra large screen padding
          "2xl": "1rem", // 2x large screen padding
        },
      },
    },
  },
  plugins: [],
};
