"use client";

import React from "react";
import { motion } from "framer-motion";

const variantBorderColors = {
  positive: "var(--accent-green)",
  neutral: "var(--accent-violet)",
  warning: "var(--accent-amber)",
  danger: "#EF4444",
};

const variantBgColors = {
  positive: "rgba(16,185,129,0.06)",
  neutral: "rgba(124,58,237,0.04)",
  warning: "rgba(245,158,11,0.06)",
  danger: "rgba(239,68,68,0.06)",
};

export default function InsightCard({ insight }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="glass-card p-5 relative overflow-hidden"
      style={{
        borderLeft: `3px solid ${variantBorderColors[insight.variant]}`,
        backgroundColor: variantBgColors[insight.variant],
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{insight.icon}</span>
        <div>
          <h4 className="font-outfit font-semibold text-sm text-[var(--text-heading)] mb-1">
            {insight.headline}
          </h4>
          <p className="text-xs font-outfit text-[var(--text-muted)] leading-relaxed">
            {insight.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
