"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems, currentUser } from "@/lib/mockData";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[240px] bg-white/60 backdrop-blur-[20px] border-r border-[var(--border-soft)] z-30 flex flex-col">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-[10px] grad-primary flex items-center justify-center">
            <span className="text-white text-sm font-bold">₹</span>
          </div>
          <span className="font-syne font-extrabold text-lg gradient-text">
            PocketWise
          </span>
        </Link>
      </div>

      {/* Nav Label */}
      <div className="px-6 pt-4 pb-2">
        <span className="text-[10px] font-outfit font-semibold text-[var(--text-muted)] uppercase tracking-[0.15em]">
          Main Menu
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 2 }}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-btn
                  text-sm font-outfit font-medium
                  transition-all duration-200 cursor-pointer relative
                  ${
                    isActive
                      ? "bg-[rgba(124,58,237,0.08)] text-[var(--accent-violet)]"
                      : "text-[var(--text-body)] hover:bg-[rgba(124,58,237,0.04)]"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full grad-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-[10px] font-semibold bg-[rgba(236,72,153,0.1)] text-[var(--accent-pink)] px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="p-4 mx-3 mb-4 rounded-card bg-[var(--surface-container)] border border-[var(--border-soft)]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full grad-primary flex items-center justify-center text-white font-syne font-bold text-sm">
            {currentUser.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-outfit font-semibold text-[var(--text-heading)] truncate">
              {currentUser.name}
            </p>
            <p className="text-[11px] font-outfit text-[var(--text-muted)] truncate">
              Premium Member
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
