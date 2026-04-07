"use client";

import React from "react";
import { motion } from "framer-motion";
import KpiCard from "./KpiCard";
import { kpiSummary } from "@/lib/mockData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function KpiGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      <motion.div variants={item}>
        <KpiCard
          label="Total Income"
          amount={kpiSummary.totalIncome}
          prefix="₹"
          gradient="violet"
          trend="+12% vs Mar"
          icon="💰"
        />
      </motion.div>
      <motion.div variants={item}>
        <KpiCard
          label="Total Expenses"
          amount={kpiSummary.totalExpenses}
          prefix="₹"
          gradient="pink"
          trend="-8% vs Mar"
          icon="💸"
        />
      </motion.div>
      <motion.div variants={item}>
        <KpiCard
          label="Net Savings"
          amount={kpiSummary.netSavings}
          prefix="₹"
          gradient="cyan"
          trend="+₹25K vs Mar"
          icon="🏦"
        />
      </motion.div>
      <motion.div variants={item}>
        <KpiCard
          label="Savings Rate"
          amount={kpiSummary.savingsRate}
          prefix="%"
          gradient="amber"
          trend="Above 35% target"
          icon="📈"
        />
      </motion.div>
    </motion.div>
  );
}
