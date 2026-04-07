"use client";

import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ui/ProgressBar";
import { budgets } from "@/lib/mockData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function BudgetAlertRow() {
  const displayBudgets = budgets.slice(0, 3);

  return (
    <div className="glass-card p-6 hover-lift">
      <h3 className="font-outfit font-semibold text-base text-[var(--text-heading)] mb-4">
        Budget Alerts
      </h3>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {displayBudgets.map((budget) => {
          const percentage = Math.round(
            (budget.spent / budget.monthlyLimit) * 100
          );
          return (
            <motion.div
              key={budget.id}
              variants={item}
              className={`p-4 rounded-btn bg-[var(--surface-container)] ${
                budget.variant === "red"
                  ? "border border-red-300 animate-pulse-shadow"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{budget.icon}</span>
                <span className="text-sm font-outfit font-medium text-[var(--text-heading)]">
                  {budget.category}
                </span>
              </div>
              <ProgressBar value={percentage} variant={budget.variant} />
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  ₹{budget.spent.toLocaleString("en-IN")}
                </span>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  ₹{budget.monthlyLimit.toLocaleString("en-IN")}
                </span>
              </div>
              {budget.variant === "red" && (
                <span className="inline-block mt-1.5 text-[10px] font-outfit font-semibold text-red-500">
                  ⚠ Over Budget
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
