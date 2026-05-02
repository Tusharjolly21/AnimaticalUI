// Theme colors and gradients for consistent usage across components
export const colors = {
  primary: {
    gradient: "from-purple-600 via-blue-600 to-purple-600",
    text: "text-purple-600",
    bg: "bg-purple-600",
    dark: "from-purple-700 to-blue-700",
  },
  secondary: {
    gradient: "from-teal-400 to-cyan-500",
    text: "text-cyan-400",
    bg: "bg-cyan-500",
  },
  accent: {
    gradient: "from-orange-500 to-pink-600",
    text: "text-orange-500",
    bg: "bg-orange-500",
  },
  dark: {
    base: "bg-dark-900",
    card: "bg-dark-800",
    text: "text-slate-100",
  },
};

export const gradients = {
  hero: "bg-gradient-hero",
  card: "bg-gradient-card",
  text: "bg-gradient-text",
  accent: "bg-gradient-accent",
};

export const animations = {
  fadeIn: "animate-fade-in",
  slideIn: "animate-slide-in",
  slideUp: "animate-slide-up",
  pulseSoft: "animate-pulse-soft",
};

export const shadows = {
  glow: "shadow-glow",
  glowBlue: "shadow-glow-blue",
  glowOrange: "shadow-glow-orange",
};

// Reusable button styles
export const buttonStyles = {
  primary:
    "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold",
  secondary:
    "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold",
  accent:
    "bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold",
  outline:
    "border-2 border-gradient-to-r from-purple-600 to-cyan-500 text-slate-100 hover:bg-purple-600/10",
};
