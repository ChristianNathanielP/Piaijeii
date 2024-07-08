/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', 
    './src/**/*.js',   
    './index.html'     
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E68369',
        secondary: '#EADBC8',
        light: '#EEEDEB',
        dark: '#131842',
      },
      fontFamily: {
        'poppins' : ["Poppins", "sans-serif"],
        'sansita' : ["Sansita Swashed", "system-ui"],
        
      },
    },
    
  },
  plugins: [],
}

