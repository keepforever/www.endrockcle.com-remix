/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        "erc-red": "#EE3142",
        "erc-yellow": "#E9E71F",
        "erc-blue": "#201B50",
      },
      backgroundImage: {
        "hero-dark": "url('/svg/endless-constellation.svg')",
        "hero-light": "url('/svg/endless-constellation.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
