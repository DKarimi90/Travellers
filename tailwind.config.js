/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      transitionDuration : {
        '3000' : '3000ms', 
        '4000' : '4000ms',
        '5000' : '5000ms',
        '7000' : '7000ms'
      }
  
    },
  },
  plugins: [],
}

