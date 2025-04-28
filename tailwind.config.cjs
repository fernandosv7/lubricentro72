/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cal: ['"Cal Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#FFD200',   // amarillo Lubricentro
        secondary: '#000000', // negro
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')", // crea /public/images/hero-bg.jpg
      },
      boxShadow: {
        'card-light': '0 4px 15px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
