/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1C1C1C', // Ajusta el código hexadecimal según tus necesidades
      },
    },
  },
  plugins: [],
}
