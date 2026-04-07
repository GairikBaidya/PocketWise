"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Food", amount: 14400, color: "var(--accent-violet)", percent: 37 },
  {
    name: "Entertainment",
    amount: 8700,
    color: "var(--accent-pink)",
    percent: 23,
  },
  {
    name: "Transport",
    amount: 10800,
    color: "var(--accent-cyan)",
    percent: 28,
  },
  {
    name: "Shopping",
    amount: 4600,
    color: "var(--accent-amber)",
    percent: 12,
  },
];

const circumference = 2 * Math.PI * 40; // r=40

export default function SpendingDonut() {
  let cumulativeOffset = 0;

  return (
    <div className="glass-card p-6 hover-lift">
      <h3 className="font-outfit font-semibold text-base text-[var(--text-heading)] mb-4">
        Spending Pulse
      </h3>

      <div className="flex items-start gap-6">
        {/* Donut */}
        <div className="flex-shrink-0">
          <svg viewBox="0 0 110 110" width="130" height="130">
            {/* Track ring */}
            <circle
              cx="55"
              cy="55"
              r="40"
              fill="none"
              stroke="#F0EBFF"
              strokeWidth="18"
            />

            {/* Segments */}
            {categories.map((cat, i) => {
              const dashLength = (cat.percent / 100) * circumference;
              const dashGap = circumference - dashLength;
              const offset = -cumulativeOffset;
              cumulativeOffset += dashLength;

              return (
                <motion.circle
                  key={cat.name}
                  cx="55"
                  cy="55"
                  r="40"
                  fill="none"
                  stroke={cat.color}
                  strokeWidth="18"
                  strokeDasharray={`${dashLength} ${dashGap}`}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={{
                    strokeDasharray: `${dashLength} ${dashGap}`,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* Center text */}
            <text
              x="55"
              y="52"
              textAnchor="middle"
              className="text-[14px] font-mono font-bold fill-[var(--text-heading)]"
            >
              ₹38.5K
            </text>
            <text
              x="55"
              y="65"
              textAnchor="middle"
              className="text-[9px] font-outfit fill-[var(--text-muted)]"
            >
              spent
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 pt-2">
          {categories.map((cat, i) => (
            <div key={cat.name} className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-outfit font-medium text-[var(--text-body)]">
                    {cat.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-[var(--text-heading)]">
                    ₹{cat.amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-[#F0EBFF] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: cat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percent}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
