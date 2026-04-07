"use client";

import React, { useState } from "react";
import TransactionRow from "./TransactionRow";

const PAGE_SIZE = 8;

export default function TransactionTable({ transactions }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);
  const slice = transactions.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[11px] font-outfit font-semibold text-[var(--text-muted)] uppercase tracking-wider bg-[var(--surface-container)]">
              <th className="text-left py-3 pl-4">Description</th>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Date</th>
              <th className="text-left py-3">Type</th>
              <th className="text-right py-3 pr-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((txn, i) => (
              <TransactionRow key={txn.id} transaction={txn} index={i} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-[rgba(124,58,237,0.06)]">
          <span className="text-xs font-outfit text-[var(--text-muted)]">
            Showing {page * PAGE_SIZE + 1}–
            {Math.min((page + 1) * PAGE_SIZE, transactions.length)} of{" "}
            {transactions.length}
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-3 py-1 rounded-btn text-xs font-outfit font-medium
                text-[var(--text-muted)] hover:bg-[rgba(124,58,237,0.06)]
                disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-7 h-7 rounded-btn text-xs font-outfit font-medium transition-all ${
                  page === i
                    ? "grad-primary text-white"
                    : "text-[var(--text-muted)] hover:bg-[rgba(124,58,237,0.06)]"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="px-3 py-1 rounded-btn text-xs font-outfit font-medium
                text-[var(--text-muted)] hover:bg-[rgba(124,58,237,0.06)]
                disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
