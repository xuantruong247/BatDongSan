/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      main: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        main: "#004835",
        over: "#949467",
        overlay: "rgba(0,0,0,0.9)"
      },


      screens: {
        
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width:"1536px") { ... }
      }
    },
  },
  plugins: [
    "@tailwindcss/line-clamp"
  ],
}