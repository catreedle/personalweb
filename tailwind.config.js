/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      borderImage: {
        'gradient': 'linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)',
      },
    },
  },
  plugins: [],
}

