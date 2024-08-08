/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        'td-primary-0':'#BA83DE',
        'td-primary-1': '#ADB0D7',
        'td-primary-2': '#E3CFE6',
        'td-primary-emphasis':'#DE83B0',
        'td-secondary-0':'#323452',
        'td-secondary-1':'#353757',
        'td-secondary-2':'#42445F',
        'td-secondary-emphasis':'#4B4D6E',
        
        'custom-dark': '#1C1C1C', 
      },
    },
  },
  plugins: [],
}
