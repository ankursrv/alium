/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1170px',
      xl: '1440px',
    },
    fontFamily: {
      primary: ['Albert Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B37FF',
          "hover-dark": '#030072',
          "hover-light": '#efefff',
        },

        secondary: {
          DEFAULT: '#ffccdc',
          "hover-dark": '#ffccdc',
          "hover-light": '#ffccdc',
        },
        'gray-light':'#727272',
        'gray-dark':'#4F4F4F',
        black:'#111111',
      },
      borderColor:{
      borderPrimary:'#CFCFCF',
      },
    },
  },
  plugins: [],
};
