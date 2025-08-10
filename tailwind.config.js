/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 200: "#cfd7ff", 500: "#5b6bff", 600: "#4b58e6" }
      },
      borderRadius: { "2xl": "1.25rem" }
    }
  },
  plugins: []
}
