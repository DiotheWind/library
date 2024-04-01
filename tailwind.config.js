/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins"],
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["retro"],
  }
}

