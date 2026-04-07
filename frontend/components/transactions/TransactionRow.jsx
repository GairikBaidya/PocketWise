"use client";

import React from "react";
import { motion } from "framer-motion";
import CategoryPill from "@/components/ui/CategoryPill";
import { categories as catList } from "@/lib/mockData";

export default function TransactionRow({
  transaction: txn,
  index,
}) {
  const cat = catList.find((c) => c.name === txn.category);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-t border-[rgba(124,58,237,0.06)] hover:bg-[rgba(124,58,237,0.03)] transition-colors"
    >
      <td className="py-3.5 pl-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-[10px] flex items-center justify-center text-sm flex-shrink-0"
            style={{
              backgroundColor: cat ? `${cat.color}14` : "#F0EBFF",
            }}
          >
            {cat?.icon || "💱"}
          </div>
          <div>
            <p className="text-sm font-outfit font-medium text-[var(--text-heading)]">
              {txn.description}
            </p>
            <p className="text-[11px] font-outfit text-[var(--text-muted)]">
              {txn.id}
            </p>
          </div>
        </div>
      </td>
      <td className="py-3.5">
        {cat && (
          <CategoryPill name={cat.name} icon={cat.icon} color={cat.color} />
        )}
      </td>
      <td className="py-3.5">
        <span className="text-xs font-outfit text-[var(--text-muted)]">
          {formatDate(txn.date)}
        </span>
      </td>
      <td className="py-3.5">
        <span
          className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-outfit font-semibold ${
            txn.type === "income"
              ? "bg-[rgba(16,185,129,0.1)] text-[var(--accent-green)]"
              : "bg-[rgba(236,72,153,0.1)] text-[var(--accent-pink)]"
          }`}
        >
          {txn.type === "income" ? "Income" : "Expense"}
        </span>
      </td>
      <td className="py-3.5 pr-4 text-right">
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
}
