/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        sliding: {
          '0%': { top: '-300px', opacity: 0 },
          '100%': { top: 0, opacity: 1 }
        },
        zoomIn: {
          '0%': { transform: 'scale(.9)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0 }
        },
        zoomOut: {
          '0%': { transform: 'scale(1.2)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        },
        fill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        typing: {
          '0%': { transform: 'scale(1)', opacity: 0 },
          '50%': { transform: 'scale(1.2)', opacity: 0.8 },
          '100%': { transform: 'scale(1)', opacity: 0 }
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        sliding: 'sliding .3s linear',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'zoom-out': 'zoomOut .3s ease',
        'zoom-in': 'zoomIn .3s ease forwards',
        fill: 'fill .5s linear 1',
        'typing': 'typing 1s infinite'
      },
      colors: {
        dark: {
          100: '#e5e1e8',  // Lightest shade
          200: '#c2bbc9',
          300: '#a095a9',
          400: '#7d6f89',
          500: '#5a4969',  // Default medium shade
          600: '#463a51',
          700: '#322b39',
          800: '#231d26',  // Your base color
          900: '#171118',  // Darkest shade
        },
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}