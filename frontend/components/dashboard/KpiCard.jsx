"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const gradientClasses = {
  violet: "grad-violet",
  pink: "grad-pink",
  cyan: "grad-cyan",
  amber: "grad-amber",
};

export default function KpiCard({
  label,
  amount,
  prefix,
  gradient,
  trend,
  icon,
}) {
  const displayAmount = useCountUp(amount);

  const formatAmount = (val) => {
    if (prefix === "%") return `${val}${prefix}`;
    return `${prefix}${val.toLocaleString("en-IN")}`;
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-card p-5 text-white cursor-default ${gradientClasses[gradient]}`}
    >
      {/* Shimmer overlay */}
      <div className="shimmer-overlay" />

      {/* Top row */}
      <div className="flex items-start justify-between mb-3 relative z-10">
        <span className="text-xs font-outfit font-medium text-white/80 uppercase tracking-wider">
          {label}
        </span>
        <div className="w-9 h-9 rounded-[10px] bg-white/[0.18] flex items-center justify-center text-lg">
          {icon}
        </div>
      </div>

      {/* Amount */}
      <p className="font-mono font-bold text-2xl mb-2 relative z-10">
        {formatAmount(displayAmount)}
      </p>

      {/* Trend Badge */}
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-[11px] font-outfit font-semibold relative z-10">
        {trend}
      </span>
    </motion.div>
  );
}
