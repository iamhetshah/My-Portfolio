/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Open Sans"],
        sans: ["PT Sans"],
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
