/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      },
      screens: {
        default: '1240px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      alegreya: ['var(--font-alegreya)']
    },
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
}
