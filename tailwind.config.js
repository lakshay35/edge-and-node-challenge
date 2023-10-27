/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      inactive: '#BBB5CA',
      delegate: '#6F4CFF',
      loadmore: '#D8D8D8',
      lightgrey: '#D8D8D8',
      superlightgrey: 'rgb(265,265,265,.16)',
      rowselection: 'rgb(265,265,265,0.02)',
    },
    extend: {
      opacity: {
        16: '.16',
      },
    },
  },
  plugins: [],
}
