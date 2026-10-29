/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"] },
      colors: {
        brand: {
          50: "#effcf8", 100: "#d3f8ec", 200: "#a8f0da", 300: "#6fe2c3", 400: "#38cba6",
          500: "#1fb590", 600: "#139377", 700: "#12755f", 800: "#135c4d", 900: "#134c40"
        }
      },
      keyframes: {
        bar: { "0%": { width: "0%" }, "100%": { width: "100%" } },
        pop: { "0%": { transform: "scale(.6)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }
      },
      animation: { bar: "bar 1.4s ease-out forwards", pop: "pop .6s ease-out both" }
    }
  },
  plugins: []
};
