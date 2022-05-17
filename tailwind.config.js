module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      sage: 'rgb(121, 180, 183)',
      cream: {
        light: 'rgb(253, 242, 248)',
        DEFAULT: 'rgb(220, 164, 150)',
      },
      grey: 'rgb(4, 120, 87)',
      black: 'rgb(21, 36, 31)',
    },

    extend: {
      stroke: (theme) => theme('colors'),
      fill: (theme) => theme('colors'),
      fill: {
        current: 'currentColor',
        none: 'none',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      scale: {
        25: '.25',
        97: '.97',
        98: '.98',
        99: '.99',
        101: '1.01',
        102: '1.02',
        103: '1.03',
        175: '1.75',
        200: '2.00',
      },
      fontFamily: {
        cormorant: ["cormorant-garamond", "serif"],
        nautica: ["nautica", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
