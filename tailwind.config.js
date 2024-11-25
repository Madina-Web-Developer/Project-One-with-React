/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secounderycolor': '#0B132A',
        'BandColor': '#F53838',
      }
    },
      container:{
       center:true,
       padding:{
        DEFAULT:'10px',
        sm:'20px',
        md:'20px',
      }
       
    },

   fontFamily:{
    "Rubik": ["Rubik", 'serif']
   },
  },
  plugins: [],
}