/** @type {import('tailwindcss').Config} */
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary gradients - Purple to Blue
        primary: {
          50: "#f3f0ff",
          100: "#e9e0ff",
          200: "#d4b9ff",
          300: "#b794f6",
          400: "#7c3aed",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#3c0d6b",
          900: "#240049",
        },
        // Secondary - Teal to Cyan
        secondary: {
          300: "#67e8f9",
          400: "#06b6d4",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        // Accent - Orange to Pink
        accent: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        // Dark custom palette
        dark: {
          900: "#0f0f23",
          800: "#1a1a2e",
          700: "#242848",
        },
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #f97316 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
        "gradient-text": "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
        "gradient-accent": "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-in": "slideIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.3)",
        "glow-blue": "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-orange": "0 0 20px rgba(249, 115, 22, 0.3)",
      },
    },
  },
  plugins: [],
};
