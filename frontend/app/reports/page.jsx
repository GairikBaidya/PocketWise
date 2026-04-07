"use client";

import React from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import ExportCard from "@/components/reports/ExportCard";
import ReportPreview from "@/components/reports/ReportPreview";

const exportOptions = [
  {
    icon: "📄",
    title: "Monthly Statement",
    description: "Complete transaction history with category breakdown",
    format: "PDF",
  },
  {
    icon: "📊",
    title: "Budget Report",
    description: "Budget vs actual comparison across all categories",
    format: "PDF",
  },
  {
    icon: "📈",
    title: "Trend Analysis",
    description: "6-month income, expense, and savings trend data",
    format: "CSV",
  },
  {
    icon: "🧾",
    title: "Tax Summary",
    description: "Income and deductible expense summary for filing",
    format: "XLSX",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ReportsPage() {
  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl text-[var(--text-heading)]">
            Reports & Exports
          </h1>
          <p className="text-sm font-outfit text-[var(--text-muted)]">
            Download and preview your financial reports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Export cards */}
          <div className="lg:col-span-2">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {exportOptions.map((opt) => (
                <motion.div key={opt.title} variants={item}>
                  <ExportCard
                    icon={opt.icon}
                    title={opt.title}
                    description={opt.description}
                    format={opt.format}
                    onExport={() => {}}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Report preview */}
          <div className="lg:col-span-1">
            <ReportPreview />
          </div>
        </div>
      </motion.div>
    </AppShell>
  );
}
