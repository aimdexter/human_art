module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      colors: {
        emplois: 'hsl(180, 62%, 55%)',
        ad: 'hsl(0, 78%, 62%)',
        rh: 'hsl(34, 97%, 64%)',
        secm: 'hsl(212, 86%, 64%)',
        infos: '#083102',
      },
      fontFamily: {
        'fa': ['Poppins'],
      },
      boxShadow: {
        fa: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        emplois: '0 8px 16px 0 hsl(180, 62%, 55%)',
        ad: '0 8px 16px 0 hsl(0, 78%, 62%)',
        rh: '0 8px 16px 0 hsl(34, 97%, 64%)',
        secm: '0 8px 16px 0 hsl(212, 86%, 64%)',
        infos: '0 8px 16px 0 #083102',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
