"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Toggle({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <div
        className={`
          relative w-11 h-6 rounded-full transition-colors duration-200
          ${checked ? "bg-[var(--accent-violet)]" : "bg-[#E5E7EB]"}
        `}
        onClick={() => onChange(!checked)}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onChange(!checked);
          }
        }}
      >
        <motion.div
          className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md"
          animate={{ left: checked ? 22 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
      {label && (
        <span className="text-sm font-outfit text-[var(--text-body)]">
          {label}
        </span>
      )}
    </label>
  );
}
