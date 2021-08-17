module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'verydarkbg': '#202c37',
        'darkbg': '#2b3945',
        'purpledarkbg': '#1b0829',
        'lighttext': '#111517',
        'lightbg': '#fafafa'
      },
      width: {
        '2/8': '21%',
        '3/8': '36%',
        '4/8': '29%',
        '6/8': '48%',
        '5/8': '72%',
        '7/8': '85%',
        '97': '400px'
      },
      maxWidth: {
        '2/8': '21%',
        '3/8': '36%',
        '4/8': '29%',
        '6/8': '86%',
        '2.5xl': '52rem'
      },
      gap: {
        '2/9': '5.3%',
        '3/9': '6.5%',
        '4/9': '8%',
        '6/9': '66%'
      },
      borderRadius: {
        'smd': '2.2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
