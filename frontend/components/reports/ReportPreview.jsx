"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

export default function ReportPreview() {
  const [selectedMonth, setSelectedMonth] = useState("April");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-outfit font-semibold text-base text-[var(--text-heading)]">
            Report Preview
          </h3>
          <p className="text-xs font-outfit text-[var(--text-muted)]">
            Monthly financial summary
          </p>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-3 py-1.5 rounded-btn bg-[var(--surface-container)] text-xs font-outfit
            border border-[var(--border-soft)] outline-none cursor-pointer
            focus:border-[var(--accent-violet)]"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m} 2026
            </option>
          ))}
        </select>
      </div>

      {/* Preview card mock */}
      <div className="rounded-btn bg-[var(--surface-container)] p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-outfit text-[var(--text-muted)]">
            Total Income
          </span>
          <span className="font-mono font-bold text-sm text-[var(--accent-green)]">
            ₹1,09,500
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-outfit text-[var(--text-muted)]">
            Total Expenses
          </span>
          <span className="font-mono font-bold text-sm text-[var(--accent-pink)]">
            ₹38,500
          </span>
        </div>
        <div className="h-px bg-[rgba(124,58,237,0.08)]" />
        <div className="flex items-center justify-between">
          <span className="text-xs font-outfit font-semibold text-[var(--text-heading)]">
            Net Savings
          </span>
          <span className="font-mono font-bold text-sm text-[var(--accent-violet)]">
            ₹71,000
          </span>
        </div>

        <div className="mt-3 space-y-2">
          <p className="text-xs font-outfit font-semibold text-[var(--text-heading)]">
            Top Categories
          </p>
          {[
            { name: "Food", amount: 14400, icon: "🍔" },
            { name: "Transport", amount: 10800, icon: "🚗" },
            { name: "Entertainment", amount: 8700, icon: "🎬" },
          ].map((cat) => (
            <div key={cat.name} className="flex items-center justify-between">
              <span className="text-xs font-outfit text-[var(--text-body)]">
                {cat.icon} {cat.name}
              </span>
              <span className="text-xs font-mono text-[var(--text-heading)]">
                ₹{cat.amount.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
