"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import CategoryPill from "@/components/ui/CategoryPill";
import { transactions, categories } from "@/lib/mockData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const row = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function RecentTransactions() {
  const recent = transactions.slice(0, 5);

  const getCategoryInfo = (name) =>
    categories.find((c) => c.name === name);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-outfit font-semibold text-base text-[var(--text-heading)]">
          Recent Movements
        </h3>
        <a
          href="/transactions"
          className="text-xs font-outfit font-medium text-[var(--accent-violet)] hover:underline"
        >
          View all →
        </a>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="text-[11px] font-outfit font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              <th className="text-left pb-3 pl-2">Description</th>
              <th className="text-left pb-3">Category</th>
              <th className="text-left pb-3">Date</th>
              <th className="text-right pb-3 pr-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((txn) => {
              const cat = getCategoryInfo(txn.category);
              return (
                <motion.tr
                  key={txn.id}
                  variants={row}
                  className="border-t border-[rgba(124,58,237,0.06)] hover:bg-[rgba(124,58,237,0.03)] transition-colors"
                >
                  <td className="py-3 pl-2">
                    <span className="text-sm font-outfit text-[var(--text-heading)]">
                      {txn.description}
                    </span>
                  </td>
                  <td className="py-3">
                    {cat && (
                      <CategoryPill
                        name={cat.name}
                        icon={cat.icon}
                        color={cat.color}
                      />
                    )}
                  </td>
                  <td className="py-3">
                    <span className="text-xs font-outfit text-[var(--text-muted)]">
                      {formatDate(txn.date)}
                    </span>
                  </td>
                  <td className="py-3 pr-2 text-right">
                    <span
                      className={`text-sm font-mono font-bold ${
                        txn.type === "income"
                          ? "text-[var(--accent-green)]"
                          : "text-[var(--text-heading)]"
                      }`}
                    >
                      {txn.type === "income" ? "+" : "-"}₹
                      {txn.amount.toLocaleString("en-IN")}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
