/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: 'hsl(30, 38%, 92%)',
        darkCyan: 'hsl(158, 36%, 37%)',
        button: 'hsl(158, 36%, 17%)',
        VDarkBlue: 'hsl(212, 21%, 14%)',
        darkBlue: 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        fraunces: ['"Fraunces"', 'sans-serif']
      },
      backgroundImage: {
        'perfume': "url('../img/image-product-desktop.jpg')",
      },
      letterSpacing: {
        perfume: '5px'
      },
      spacing: {
        100: '36rem'
      }
    },
  },
  plugins: [],
}
