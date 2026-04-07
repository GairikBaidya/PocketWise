"use client";

import React from "react";

const variantStyles = {
  income: "bg-[rgba(6,182,212,0.12)] text-[var(--accent-cyan)]",
  expense: "bg-[rgba(236,72,153,0.12)] text-[var(--accent-pink)]",
  warning: "bg-[rgba(245,158,11,0.12)] text-[var(--accent-amber)]",
  success: "bg-[rgba(16,185,129,0.12)] text-[var(--accent-green)]",
  neutral: "bg-[rgba(124,58,237,0.08)] text-[var(--accent-violet)]",
};

export default function Badge({ label, variant }) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5
        rounded-full-pill text-xs font-outfit font-semibold
        ${variantStyles[variant]}
      `}
    >
      {label}
    </span>
  );
}
