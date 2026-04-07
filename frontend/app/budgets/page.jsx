"use client";

import React from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import AlertBanner from "@/components/budgets/AlertBanner";
import BudgetGrid from "@/components/budgets/BudgetGrid";
import { budgets } from "@/lib/mockData";

export default function BudgetsPage() {
  const hasOverBudget = budgets.some((b) => b.variant === "red");

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl text-[var(--text-heading)]">
            Budgets
          </h1>
          <p className="text-sm font-outfit text-[var(--text-muted)]">
            Track your spending limits across every category.
          </p>
        </div>

        {hasOverBudget && <AlertBanner />}

        <BudgetGrid budgets={budgets} />
      </motion.div>
    </AppShell>
  );
}
