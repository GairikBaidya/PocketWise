"use client";

import React from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/mockData";
import Button from "@/components/ui/Button";

export default function CategoriesTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 max-w-2xl"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-syne font-bold text-lg text-[var(--text-heading)]">
            Manage Categories
          </h3>
          <p className="text-xs font-outfit text-[var(--text-muted)]">
            Customize your expense and income categories
          </p>
        </div>
        <Button variant="secondary" className="text-xs">
          + Add Category
        </Button>
      </div>

      <div className="space-y-2">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between p-3 rounded-btn bg-[var(--surface-container)] hover:bg-[var(--surface-container-high)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center text-base"
                style={{ backgroundColor: `${cat.color}14` }}
              >
                {cat.icon}
              </div>
              <span className="text-sm font-outfit font-medium text-[var(--text-heading)]">
                {cat.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border-2"
                style={{
                  borderColor: cat.color,
                  backgroundColor: `${cat.color}30`,
                }}
              />
              <button className="text-[var(--text-muted)] hover:text-[var(--text-body)] transition-colors text-xs">
                ✏️
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
