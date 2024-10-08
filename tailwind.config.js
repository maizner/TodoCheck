/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],



  safelist: [
    // Para las clases de borde
    {
      pattern: /^border-(gray|yellow|red)-500$/,
      variants: ['hover', 'active'],
    },
    {
      pattern: /^border-blue-200$/,
      variants: ['hover', 'active'],
    },
    // Para las clases de fondo
    {
      pattern: /^bg-(gray|yellow|red)-500$/,
      variants: ['hover', 'active'],
    },
    {
      pattern: /^bg-blue-200$/,
      variants: ['hover', 'active'],
    },
    // Para las clases de texto
    {
      pattern: /^text-(gray|yellow|red)-500$/,
      variants: ['hover', 'active'],
    },
    {
      pattern: /^text-blue-200$/,
      variants: ['hover', 'active'],
    },
  ],
  
  
  theme: {
    extend: {
      colors: {
       
        'td-primary-0':'#BA83DE',
        'td-primary-1': '#ADB0D7',
        'td-primary-2': '#E3CFE6',
        'td-primary-emphasis':'#DE83B0',
        'td-secondary-darken':'#1B1C2D',
        'td-secondary-0':'#323452',
        'td-secondary-1':'#353757',
        'td-secondary-2':'#42445F',
        'td-secondary-emphasis':'#4B4D6E',
        'td-warning':'#FF763B',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        md: '1rem', /*16px*/
      },
      boxShadow: {
        'custom-purple': '0px 5px 25px rgba(156, 97, 250, 0.5)',
      },
      
      
    },
  },
  plugins: [],
}
