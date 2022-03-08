module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pinklight': '#FFEFE3',
        'orangedark': '#E25B01',
        'orangelight': '#FF6600',
        'portokal': '#FCA554',
        'greendark': '#498248',
      },
      fontFamily: {
        Inter: ['inter', 'sans-serif'],
        ProzaLibre: ['Proza Libre', 'sans-serif'],
      },
      backgroundImage: {
        'wall-1': "url('src/images/wall-1.png')",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { Tablet }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { Laptop }

      'xl': '1280px',
      // => @media (min-width: 1280px) { Desktop }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}