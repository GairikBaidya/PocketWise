"use client";

import React from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import KpiGrid from "@/components/dashboard/KpiGrid";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import SpendingDonut from "@/components/dashboard/SpendingDonut";
import BudgetAlertRow from "@/components/dashboard/BudgetAlertRow";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import { currentUser } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl text-[var(--text-heading)]">
            Good morning, {currentUser.name} ✨
          </h1>
          <p className="text-sm font-outfit text-[var(--text-muted)]">
            Your financial sanctuary is looking healthy today.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="mb-6">
          <KpiGrid />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-6">
          <div className="lg:col-span-3">
            <IncomeExpenseChart />
          </div>
          <div className="lg:col-span-2">
            <SpendingDonut />
          </div>
        </div>

        {/* Budget Alerts */}
        <div className="mb-6">
          <BudgetAlertRow />
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />
      </motion.div>
    </AppShell>
  );
}
