"use client";

import React from "react";
import { motion } from "framer-motion";

const variantStyles = {
  primary:
    "grad-primary text-white shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.4)]",
  secondary:
    "bg-[#ecdcff] text-[var(--accent-violet)] border border-[rgba(124,58,237,0.1)]",
  ghost:
    "bg-transparent text-[var(--accent-violet)] hover:bg-[rgba(124,58,237,0.06)]",
  danger:
    "bg-red-500 text-white hover:bg-red-600 shadow-[0_4px_16px_rgba(239,68,68,0.3)]",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2
        px-5 py-2.5 rounded-btn font-outfit font-medium text-sm
        transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-[var(--accent-violet)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
