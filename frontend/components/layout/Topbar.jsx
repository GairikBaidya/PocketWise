"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AddTransactionModal from "@/components/ui/AddTransactionModal";

const tabs = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets" },
  { label: "Insights", href: "/insights" },
];

export default function Topbar() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 h-16 flex items-center justify-between px-8 bg-white/60 backdrop-blur-[20px] border-b border-[var(--border-soft)]">
        {/* Tabs */}
        <nav className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link key={tab.href} href={tab.href}>
                <div className="relative px-4 py-2">
                  <span
                    className={`text-sm font-outfit font-medium transition-colors ${
                      isActive
                        ? "text-[var(--accent-violet)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-body)]"
                    }`}
                  >
                    {tab.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="topbar-tab"
                      className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full grad-primary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            <span>+</span> Add Transaction
          </Button>
          <button className="w-9 h-9 rounded-full bg-[rgba(124,58,237,0.06)] flex items-center justify-center text-[var(--accent-violet)] hover:bg-[rgba(124,58,237,0.1)] transition-colors">
            🔔
          </button>
        </div>
      </header>

      <AddTransactionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
