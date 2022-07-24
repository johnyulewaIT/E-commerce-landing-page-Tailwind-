module.exports = {
  darkMode:'class',
  content: ["./main/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {

      colors: {
        "orange": "#FFA91C",
        "red": "#FA5959",
        "blue": "#242A45",
        "grey": "#9194A2",
        "white": "#f7f7f7",
      },


    },

    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },

   

  },
  plugins: [],
}