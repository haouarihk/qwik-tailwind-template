/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0065a9",
        "accent-light": "#0098ff",
        "darken-light": "#333333",
        "darken-black": "#1e1e1e",
        dark: "#252525",
        gray: "#eef3f8"

      }
    },
  },
  plugins: [],
}
