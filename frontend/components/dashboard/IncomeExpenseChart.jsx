"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { chartData } from "@/lib/mockData";

export default function IncomeExpenseChart() {
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    controls.start("visible");
  }, [controls]);

  // Scale data to fit SVG viewBox: 0 0 480 130
  const maxVal = Math.max(
    ...chartData.map((d) => Math.max(d.income, d.expense))
  );
  const padding = { top: 15, bottom: 25, left: 10, right: 10 };
  const chartW = 480 - padding.left - padding.right;
  const chartH = 130 - padding.top - padding.bottom;

  const scaleX = (i) =>
    padding.left + (i / (chartData.length - 1)) * chartW;
  const scaleY = (val) =>
    padding.top + chartH - (val / maxVal) * chartH;

  const incomeLine = chartData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(d.income)}`)
    .join(" ");
  const expenseLine = chartData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(d.expense)}`)
    .join(" ");

  const incomeArea = `${incomeLine} L ${scaleX(chartData.length - 1)} ${
    padding.top + chartH
  } L ${scaleX(0)} ${padding.top + chartH} Z`;
  const expenseArea = `${expenseLine} L ${scaleX(chartData.length - 1)} ${
    padding.top + chartH
  } L ${scaleX(0)} ${padding.top + chartH} Z`;

  const pathLength = 600;

  if (!mounted) return null;

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-outfit font-semibold text-base text-[var(--text-heading)]">
            Cashflow Mastery
          </h3>
          <p className="text-xs font-outfit text-[var(--text-muted)]">
            Performance analysis • last 6 months
          </p>
        </div>
      </div>

      <svg viewBox="0 0 480 130" width="100%" className="overflow-visible">
        <defs>
          <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(124,58,237,0.2)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
          <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(236,72,153,0.15)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding.left}
            y1={padding.top + chartH * (1 - ratio)}
            x2={padding.left + chartW}
            y2={padding.top + chartH * (1 - ratio)}
            stroke="rgba(124,58,237,0.08)"
            strokeDasharray="4 4"
          />
        ))}

        {/* Area fills */}
        <path d={incomeArea} fill="url(#incomeGrad)" />
        <path d={expenseArea} fill="url(#expenseGrad)" />

        {/* Income line */}
        <motion.path
          d={incomeLine}
          fill="none"
          stroke="var(--accent-violet)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          strokeDasharray={pathLength}
          strokeDashoffset={0}
        />

        {/* Expense line */}
        <motion.path
          d={expenseLine}
          fill="none"
          stroke="var(--accent-pink)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          strokeDasharray={pathLength}
          strokeDashoffset={0}
        />

        {/* Endpoint dots */}
        {chartData.map((d, i) => (
          <React.Fragment key={i}>
            <motion.circle
              cx={scaleX(i)}
              cy={scaleY(d.income)}
              r={3}
              fill="var(--accent-violet)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
            />
            <motion.circle
              cx={scaleX(i)}
              cy={scaleY(d.expense)}
              r={3}
              fill="var(--accent-pink)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + i * 0.1 }}
            />
          </React.Fragment>
        ))}

        {/* Month labels */}
        {chartData.map((d, i) => (
          <text
            key={d.month}
            x={scaleX(i)}
            y={padding.top + chartH + 18}
            textAnchor="middle"
            className="text-[10px] fill-[var(--text-muted)] font-outfit"
          >
            {d.month}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-violet)]" />
          <span className="text-xs font-outfit text-[var(--text-muted)]">
            Income
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-pink)]" />
          <span className="text-xs font-outfit text-[var(--text-muted)]">
            Expenses
          </span>
        </div>
      </div>
    </div>
  );
}
