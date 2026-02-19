/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#F1F5F9", // var(--ink-bg)
          deep: "#E2E8F0",    // var(--ink-deep)
          text: "#0F172A",    // var(--text)
          muted: "#64748B"    // var(--text-muted)
        },
        sky: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          500: "#0EA5E9",
          600: "#0284C7"
        },
        gold: {
          DEFAULT: "#D7B56D",
          light: "#F1D79A",
          2: "#F1D79A"
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
