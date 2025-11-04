/** @type {import('tailwindcss').Config} */
module.exports = {
  // Point Tailwind to look inside the 'src' folder for all component files
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define a custom accent color and the background color
      colors: {
        'accent-purple': '#8B5CF6', // A bright indigo/purple for highlights
        'dark-bg': '#0A0A0A', // Ultra-dark background color used in the design
      },
      fontFamily: {
        // Use Inter as the primary font (you must ensure this is imported in your CSS)
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
