// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    linearGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'indigo-teal': [colors.indigo['200'], colors.teal['600']],
        'indigo-blue': [colors.indigo['200'], colors.blue['600']],
        'indigo-purple': [colors.indigo['400'], colors.purple['800']],
        'indigo-lighter-purple-light': [colors.indigo['100'], colors.purple['300']],
        'indigo-pink': [colors.indigo['500'], colors.pink['800']],
        'blue-teal': [colors.blue['200'], colors.teal['600']],
        'blue-blue': [colors.blue['200'], colors.blue['600']],
        'blue-purple': [colors.blue['500'], colors.purple['800']],
        'blue-pink': [colors.blue['500'], colors.pink['800']],
        'purple-pink': [colors.purple['400'], colors.pink['700']],
        'teal-pink': [colors.teal['400'], colors.pink['700']],
        'pink-light-pink-dark': [colors.pink['300'], colors.pink['800']],
        'red': colors.red['400'],
        'red-blue': [colors.red['200'], colors.blue['600']],
        'red-dark-blue': [colors.red['500'], colors.blue['900']],
        'gray-red': [colors.gray['800'], colors.red['400']],
      },
    },
    radialGradients: {
      shapes: { // defaults to this value
        'default': 'ellipse',
      },
      sizes: { // defaults to this value
        'default': 'closest-side',
      },
      positions: { // defaults to these values
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
    },
    conicGradients: {
      startingAngles: { // defaults to this value
        'default': '0',
      },
      positions: { // defaults to these values
        'default': 'center',
        't': 'top',
        'tr': 'top right',
        'r': 'right',
        'br': 'bottom right',
        'b': 'bottom',
        'bl': 'bottom left',
        'l': 'left',
        'tl': 'top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'checkerboard': ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg'],
      },
    },
    repeatingLinearGradients: theme => ({
      directions: theme('linearGradients.directions'), // defaults to the same values as linearGradients’ directions
      colors: theme('linearGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
    repeatingRadialGradients: theme => ({
      shapes: theme('radialGradients.shapes'), // defaults to the same value as radialGradients’ shapes
      sizes: { // defaults to this value
        'default': 'farthest-corner',
      },
      positions: theme('radialGradients.positions'), // defaults to the same values as radialGradients’ positions
      colors: theme('radialGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
    repeatingConicGradients: theme => ({
      startingAngles: theme('conicGradients.startingAngles'), // defaults to the same value as conicGradients’ startingAngles
      positions: theme('conicGradients.positions'), // defaults to the same values as conicGradients’ positions
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'starburst': ['white 0 5deg', 'blue 5deg'],
      },
      lengths: { // defaults to {}
        'sm': '10deg',
        'md': '20deg',
        'lg': '40deg',
      },
    }),
  },
  variants: { // all the following default to ['responsive']
    backgroundImage: ['responsive'], // this is for the "bg-none" utility
    linearGradients: ['responsive'],
    radialGradients: ['responsive'],
    conicGradients: ['responsive'],
    repeatingLinearGradients: ['responsive'],
    repeatingRadialGradients: ['responsive'],
    repeatingConicGradients: ['responsive'],
  },
  plugins: [
    require('tailwindcss-gradients')(),
  ],
}
