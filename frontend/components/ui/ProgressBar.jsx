"use client";

import React from "react";
import { motion } from "framer-motion";

const gradients = {
  green: "linear-gradient(90deg, #10B981, #34D399)",
  amber: "linear-gradient(90deg, #F59E0B, #FCD34D)",
  red: "linear-gradient(90deg, #EF4444, #F87171)",
};

export default function ProgressBar({ value, variant }) {
  const clampedValue = Math.min(value, 100);

  return (
    <div
      className={`
        w-full h-1.5 rounded-full overflow-hidden
        bg-[#F0EBFF]
        ${variant === "red" ? "animate-pulse-shadow" : ""}
      `}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${clampedValue}%` }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: gradients[variant] }}
      />
    </div>
  );
}
