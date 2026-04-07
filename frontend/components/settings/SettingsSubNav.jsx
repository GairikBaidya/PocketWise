"use client";

import React from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "profile", label: "Profile", icon: "👤" },
  { id: "security", label: "Security", icon: "🔒" },
  { id: "categories", label: "Categories", icon: "🏷️" },
  { id: "notifications", label: "Notifications", icon: "🔔" },
];

export default function SettingsSubNav({
  activeTab,
  onTabChange,
}) {
  return (
    <div className="flex gap-1 p-1 bg-[var(--bg-surface)] backdrop-blur-[20px] border border-[var(--border-soft)] rounded-btn mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-outfit font-medium transition-colors ${
            activeTab === tab.id
              ? "text-white"
              : "text-[var(--text-muted)] hover:text-[var(--text-body)]"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="settings-tab"
              className="absolute inset-0 grad-primary rounded-[10px]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.icon}</span>
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
