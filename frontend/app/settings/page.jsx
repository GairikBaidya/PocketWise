"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import SettingsSubNav from "@/components/settings/SettingsSubNav";
import ProfileTab from "@/components/settings/ProfileTab";
import SecurityTab from "@/components/settings/SecurityTab";
import CategoriesTab from "@/components/settings/CategoriesTab";
import NotificationsTab from "@/components/settings/NotificationsTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderTab = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "security":
        return <SecurityTab />;
      case "categories":
        return <CategoriesTab />;
      case "notifications":
        return <NotificationsTab />;
    }
  };

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl text-[var(--text-heading)]">
            Settings
          </h1>
          <p className="text-sm font-outfit text-[var(--text-muted)]">
            Manage your account and preferences.
          </p>
        </div>

        <SettingsSubNav activeTab={activeTab} onTabChange={setActiveTab} />

        {renderTab()}
      </motion.div>
    </AppShell>
  );
}
