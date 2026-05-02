/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#020617",
          900: "#031826",
          800: "#06243A",
          700: "#0B3553"
        },
        aqua: {
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9"
        }
      },
      boxShadow: {
        ocean: "0 24px 80px rgba(2, 6, 23, 0.32)",
        glow: "0 0 32px rgba(56, 189, 248, 0.28)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"]
      }
    }
  },
  plugins: []
};
