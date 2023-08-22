/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sfpro: ["SFPRO"],
        inter: ["Inter"],
        satoshi_variable: ['Satoshi-Variable'],
        satoshi_variable_italic: 'Satoshi-VariableItalic',
        satoshi_light: 'Satoshi-Light',
        satoshi_light_italic: 'Satoshi-LightItalic',
        satoshi_regular: 'Satoshi-Regular',
        satoshi_italic: 'Satoshi-Italic',
        satoshi_medium: 'Satoshi-Medium',
        satoshi_medium_italic: 'Satoshi-MediumItalic',
        satoshi_bold: 'Satoshi-Bold',
        satoshi_bold_italic: 'Satoshi-BoldItalic',
        satoshi_black: 'Satoshi-Black',
        satoshi_black_italic: 'Satoshi-BlackItalic'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sliding: {
          '0%': {top:'-300px', opacity:0},
          '100%': {top:0, opacity:1}
        },
        zoomIn: {
          '0%': {transform: 'scale(.9)', opacity: 1},
          '100%': {transform: 'scale(1)', opacity: 0}
        },
        zoomOut: {
          '0%': {transform: 'scale(1.2)', opacity: 0},
          '100%': {transform: 'scale(1)', opacity: 1}
        },
        fill: {
          '0%': {width: '0%'},
          '100%': {width: '100%'}
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'sliding': 'sliding .3s linear',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'zoom-out': 'zoomOut .3s ease',
        'zoom-in': 'zoomIn .3s ease forwards',
        'fill': 'fill .5s linear 1'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
