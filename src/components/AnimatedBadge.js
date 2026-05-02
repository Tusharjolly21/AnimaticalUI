import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBadge({ children, variant = "primary" }) {
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 text-white",
    secondary: "bg-gradient-to-r from-cyan-500 to-teal-500 text-white",
    accent: "bg-gradient-to-r from-orange-500 to-pink-600 text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${variants[variant]} shadow-lg`}
    >
      {children}
    </motion.div>
  );
}
