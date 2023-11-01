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

        availableGray: '#D9D9D9',
        themegray: '#F4F4F4',
        spacegray: '#41464b',
        typegray: '#6C757D',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

        primary: "#41464B",
        secondary: "#000000",
        availprimary: "#D9D9D9",
        availsecondary: "#6C757D",
      },     

    },
  },
  plugins: [],
};
