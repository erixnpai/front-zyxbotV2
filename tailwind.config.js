

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 10s linear infinite",
         "loop-scroll-reverse": "loop-scroll-reverse 10s linear infinite",
      },
      keyframes:{
        "loop-scroll": {
          from:{transform: "translateX(0)"},
          to:{transform: "translateX(-100%)"}
        },
         "loop-scroll-reverse": {
           from: { transform: "translateX(-100%)" },
           to: { transform: "translateX(0)" },
         },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}