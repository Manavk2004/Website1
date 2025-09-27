export default {
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
}