/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Tomato: ["hsl(4, 100%, 67%)"],
        Dark_Slate_Grey: ["hsl(234, 29%, 20%)"],
        Charcoal_Grey: ["hsl(235, 18%, 26%)"],
        Grey: ["hsl(231, 7%, 60%)"],
      },
      screens: {
        tablet: "560px",
        // => @media (min-width: 560px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1520px",
        // => @media (min-width: 1425px) { ... }
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
