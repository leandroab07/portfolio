/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#1f2937',
        lightGray: '#374151',
        textGray: '#d1d5db',
        purple: '#7e5bef',
      },
    },
  },
  plugins: [],
}
