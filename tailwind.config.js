/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      'sm':'640px',
      'md':'760px',
      'lg':'1024px',
      'xl':'1280px',
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        'sm':'1.5rem',
        'md':'2rem',
        'lg':'3rem',
        'xl':'4rem'
      },


    },
    extend: {
      colors:{
        'surface': '#FFF8F7',
        'border':'#D8C2BE',
        'stickymenu':'#91230D',
        'lable':'#616161'

      },
    },
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      ".container": {
        maxWidth: "100%",
        "@screen xl": {
          maxWidth: "1850px",
        },
      },
    });
  },],
}

