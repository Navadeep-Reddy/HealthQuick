/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BWhite: "#F7F8F7",
        TBlack: "#3C3C3C",
        LGreen: "#9CDCAC",
        DGreen: "#0B4618"

      }
    },
  },
  plugins: [],
}
