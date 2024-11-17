/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray': '#282828',
    		'custom-red': '#ff0000'
      },
    },
  },
  plugins: [],
}


// 121212