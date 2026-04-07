"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-12 flex flex-col items-center justify-center text-center"
    >
      <div className="text-6xl mb-4">📭</div>
      <h3 className="font-syne font-bold text-xl text-[var(--text-heading)] mb-2">
        No transactions found
      </h3>
      <p className="text-sm font-outfit text-[var(--text-muted)] mb-6 max-w-xs">
        Try adjusting your filters or add a new transaction to get started.
      </p>
      <Button variant="primary">+ Add Transaction</Button>
    </motion.div>
  );
}
