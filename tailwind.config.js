module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'custom-gradient': 'linear-gradient(to right, white, white)', // cyan-500 to blue-500 gradient
        "custom-women" :  'bg-gradient-to-r from-purple-500 to-pink-500',
      },
      colors: {
        customColor: '#06b6d4', // You can still define a color if needed
        aboutColor: '#374151',
        contactColor: '#F9F3F5',
        barcolor : '#273038',
        mycolor : '#F3F3F3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
