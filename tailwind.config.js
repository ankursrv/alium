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
          "primary-hover-dark": '#030072',
          "primary-hover-light": '#efefff',
        },

        secondary: {
          DEFAULT: '#ffccdc',
          "secondary-hover-dark": '#ffccdc',
          "secondary-hover-light": '#ffccdc',
        },

      },
    },
  },
  plugins: [],
};
