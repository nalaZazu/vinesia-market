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
        bordergray: '#A0A6AC',
        tabsgray: '#C6C7C8',
<<<<<<< HEAD
        bgbutton: '#842029',
        
        /**market listing color  */

        availableGray: '#D9D9D9',
        themegray: '#F4F4F4',
        spacegray: '#41464b',
=======
>>>>>>> 94161c5278d1813eb82b8e3b6cb86094ba641357
        typegray: '#6C757D',
        primary: "#41464B",
        secondary: "#000000",
        bgprimary: "#D9D9D9",
        bgsecondary: "#6C757D",

      },

    },
  },
  plugins: [],
};
