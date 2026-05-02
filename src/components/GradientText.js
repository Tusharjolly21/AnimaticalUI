import React from "react";

export default function GradientText({
  children,
  className = "",
  animated = true,
}) {
  return (
    <span
      className={`bg-gradient-text font-bold ${
        animated ? "animate-fade-in" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
