/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px'
    },

    extend: {
      colors: {
        primary: '#0E1112',
        gray: '#484b4b',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};
