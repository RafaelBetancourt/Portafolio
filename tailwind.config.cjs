/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-outer-space': '#1E3231',
        'black-coral': '#04151F'
      },
      fontFamily: {
        'tiro': ['Tiro Devanagari Hindi', 'serif']
      }
    }
  },
  plugins: [],
}
