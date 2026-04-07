"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Toggle from "@/components/ui/Toggle";
import Button from "@/components/ui/Button";

const initialSettings = [
  {
    id: "budget-alerts",
    title: "Budget Alerts",
    description: "Notify when spending nears or exceeds budget limits",
    enabled: true,
  },
  {
    id: "transaction-alerts",
    title: "Transaction Alerts",
    description: "Get notified for every new transaction",
    enabled: true,
  },
  {
    id: "weekly-summary",
    title: "Weekly Summary",
    description: "Receive a weekly spending summary every Monday",
    enabled: false,
  },
  {
    id: "monthly-report",
    title: "Monthly Reports",
    description: "Auto-generate and send monthly financial reports",
    enabled: true,
  },
  {
    id: "insights",
    title: "Smart Insights",
    description: "Get AI-powered spending insights and recommendations",
    enabled: true,
  },
  {
    id: "security",
    title: "Security Alerts",
    description: "Notify on new device logins and password changes",
    enabled: true,
  },
];

export default function NotificationsTab() {
  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 max-w-2xl"
    >
      <h3 className="font-syne font-bold text-lg text-[var(--text-heading)] mb-5">
        Notification Preferences
      </h3>

      <div className="space-y-4 mb-6">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between p-3 rounded-btn bg-[var(--surface-container)]"
          >
            <div className="flex-1 mr-4">
              <p className="text-sm font-outfit font-medium text-[var(--text-heading)]">
                {setting.title}
              </p>
              <p className="text-[11px] font-outfit text-[var(--text-muted)]">
                {setting.description}
              </p>
            </div>
            <Toggle
              checked={setting.enabled}
              onChange={() => toggleSetting(setting.id)}
            />
          </div>
        ))}
      </div>

      <Button variant="primary">Save Preferences</Button>
    </motion.div>
  );
}
