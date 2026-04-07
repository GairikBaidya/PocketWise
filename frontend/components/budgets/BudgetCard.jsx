"use client";

import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ui/ProgressBar";

export default function BudgetCard({ budget }) {
  const percentage = Math.round((budget.spent / budget.monthlyLimit) * 100);
  const remaining = budget.monthlyLimit - budget.spent;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`glass-card p-5 ${
        budget.variant === "red"
          ? "border-red-300 animate-pulse-shadow"
          : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-btn bg-[var(--surface-container)] flex items-center justify-center text-xl">
          {budget.icon}
        </div>
        <div>
          <h4 className="font-outfit font-semibold text-sm text-[var(--text-heading)]">
            {budget.category}
          </h4>
          <p className="text-[11px] font-outfit text-[var(--text-muted)]">
            Monthly Budget
          </p>
        </div>
        <span
          className={`ml-auto text-xs font-mono font-bold ${
            budget.variant === "red"
              ? "text-red-500"
              : budget.variant === "amber"
              ? "text-[var(--accent-amber)]"
              : "text-[var(--accent-green)]"
          }`}
        >
          {percentage}%
        </span>
      </div>

      <ProgressBar value={percentage} variant={budget.variant} />

      <div className="flex items-center justify-between mt-3">
        <span className="text-xs font-mono text-[var(--text-heading)]">
          ₹{budget.spent.toLocaleString("en-IN")} spent
        </span>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          of ₹{budget.monthlyLimit.toLocaleString("en-IN")}
        </span>
      </div>

      {remaining < 0 ? (
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[11px] font-outfit font-semibold text-red-500">
            ⚠ Over by ₹{Math.abs(remaining).toLocaleString("en-IN")}
          </span>
        </div>
      ) : (
        <div className="mt-2">
          <span className="text-[11px] font-outfit text-[var(--text-muted)]">
            ₹{remaining.toLocaleString("en-IN")} remaining
          </span>
        </div>
      )}
    </motion.div>
  );
}
