"use client";

import React from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import InsightGrid from "@/components/insights/InsightGrid";
import SparklineCard from "@/components/insights/SparklineCard";
import PowerBIEmbed from "@/components/insights/PowerBIEmbed";
import { insights, sparklineData } from "@/lib/mockData";

export default function InsightsPage() {
  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl text-[var(--text-heading)]">
            Smart Insights
          </h1>
          <p className="text-sm font-outfit text-[var(--text-muted)]">
            AI-powered analysis of your financial health.
          </p>
        </div>

        {/* Sparkline cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          <SparklineCard
            label="Monthly Income"
            value="₹84,500"
            trend="12% vs last month"
            trendUp={true}
            data={sparklineData.income}
            color="var(--accent-violet)"
          />
          <SparklineCard
            label="Monthly Expenses"
            value="₹38,500"
            trend="8% vs last month"
            trendUp={false}
            data={sparklineData.expenses}
            color="var(--accent-pink)"
          />
          <SparklineCard
            label="Net Savings"
            value="₹46,000"
            trend="25% above target"
            trendUp={true}
            data={sparklineData.savings}
            color="var(--accent-green)"
          />
        </div>

        {/* Insight Cards Grid */}
        <InsightGrid insights={insights} />

        {/* Power BI Embed */}
        <PowerBIEmbed />
      </motion.div>
    </AppShell>
  );
}
