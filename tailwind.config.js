/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      borderImage: {
        'gradient': 'linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)',
      },
      colors: {
        'purple-pink': 'rgba(229, 135, 214, 0.8)',
        'purple-bold': 'rgba(216, 31, 194, 0.8)'
      }
    },
  },
  plugins: [],
}

