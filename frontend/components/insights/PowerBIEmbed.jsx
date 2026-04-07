"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PowerBIEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 mt-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-outfit font-semibold text-base text-[var(--text-heading)]">
            Power BI Analytics
          </h3>
          <p className="text-xs font-outfit text-[var(--text-muted)]">
            Advanced analytics • Interactive dashboards
          </p>
        </div>
        <button className="px-4 py-2 rounded-btn text-xs font-outfit font-medium bg-[var(--surface-container)] text-[var(--accent-violet)] hover:bg-[rgba(124,58,237,0.08)] transition-colors border border-[var(--border-soft)]">
          🔗 Connect Power BI
        </button>
      </div>

      <div className="w-full h-[360px] rounded-btn bg-[var(--surface-container)] border border-dashed border-[rgba(124,58,237,0.15)] flex flex-col items-center justify-center">
        <div className="text-5xl mb-3 opacity-40">📊</div>
        <p className="text-sm font-outfit font-medium text-[var(--text-heading)] mb-1">
          Power BI Workspace
        </p>
        <p className="text-xs font-outfit text-[var(--text-muted)] text-center max-w-xs">
          Connect your Power BI account to view interactive dashboards and
          advanced analytics right here.
        </p>
      </div>
    </motion.div>
  );
}
