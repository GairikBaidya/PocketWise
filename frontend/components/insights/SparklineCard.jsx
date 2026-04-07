"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SparklineCard({
  label,
  value,
  trend,
  trendUp,
  data,
  color,
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 30;

  const points = data
    .map(
      (val, i) =>
        `${(i / (data.length - 1)) * w},${h - ((val - min) / range) * h}`
    )
    .join(" ");

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="glass-card p-4 flex items-center gap-4"
    >
      <div className="flex-1">
        <p className="text-xs font-outfit text-[var(--text-muted)] mb-0.5">
          {label}
        </p>
        <p className="font-mono font-bold text-lg text-[var(--text-heading)]">
          {value}
        </p>
        <span
          className={`text-[11px] font-outfit font-semibold ${
            trendUp ? "text-[var(--accent-green)]" : "text-red-500"
          }`}
        >
          {trendUp ? "↑" : "↓"} {trend}
        </span>
      </div>

      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="flex-shrink-0">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
