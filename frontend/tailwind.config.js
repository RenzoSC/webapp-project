/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '600px',
      // => @media (min-width: 600px) { ... }

      'md': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '2xl': '2000px',
      // => @media (min-width: 2000px) { ... }
    }
  },
  plugins: [],
}

