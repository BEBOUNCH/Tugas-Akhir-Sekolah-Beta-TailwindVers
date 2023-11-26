/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00DC82',
        dark: '#0f172a',
        secondary: '#64748b',
        fourth: '#f1f5f9',
        paletorange: '#eda300',
        darkcyan: '#00B86B'
      }
    },
  },
}