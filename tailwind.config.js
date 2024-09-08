/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        Rubik:['Rubik', 'system-ui'],
        OpenSans:["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

