"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/mockData";

export default function FilterBar({ filters, onFilterChange }) {
  const [catOpen, setCatOpen] = useState(false);
  const catRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const typeOptions = ["all", "income", "expense"];

  const toggleCategory = (name) => {
    const updated = filters.categories.includes(name)
      ? filters.categories.filter((c) => c !== name)
      : [...filters.categories, name];
    onFilterChange({ ...filters, categories: updated });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {/* Date range */}
      <div className="flex items-center gap-2 bg-[var(--bg-surface)] backdrop-blur-[20px] border border-[var(--border-soft)] rounded-pill px-3 py-2">
        <input
          type="date"
          value={filters.dateFrom}
          onChange={(e) =>
            onFilterChange({ ...filters, dateFrom: e.target.value })
          }
          className="bg-transparent text-xs font-outfit text-[var(--text-body)] outline-none"
        />
        <span className="text-[var(--text-muted)] text-xs">→</span>
        <input
          type="date"
          value={filters.dateTo}
          onChange={(e) =>
            onFilterChange({ ...filters, dateTo: e.target.value })
          }
          className="bg-transparent text-xs font-outfit text-[var(--text-body)] outline-none"
        />
      </div>

      {/* Category multi-select */}
      <div ref={catRef} className="relative">
        <button
          onClick={() => setCatOpen(!catOpen)}
          className="bg-[var(--bg-surface)] backdrop-blur-[20px] border border-[var(--border-soft)] rounded-pill px-4 py-2 text-xs font-outfit font-medium text-[var(--text-body)] hover:bg-white/90 transition-colors"
        >
          Categories{" "}
          {filters.categories.length > 0 && (
            <span className="ml-1 bg-[var(--accent-violet)] text-white px-1.5 py-0.5 rounded-full text-[10px]">
              {filters.categories.length}
            </span>
          )}
          <span className="ml-1.5">▾</span>
        </button>

        {catOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 mt-2 w-52 glass-card-elevated p-3 shadow-glow-lg z-30"
          >
            {categories.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2.5 py-1.5 px-2 rounded-md hover:bg-[rgba(124,58,237,0.04)] cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.name)}
                  onChange={() => toggleCategory(cat.name)}
                  className="accent-[var(--accent-violet)] w-3.5 h-3.5"
                />
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-xs font-outfit text-[var(--text-body)]">
                  {cat.name}
                </span>
              </label>
            ))}
          </motion.div>
        )}
      </div>

      {/* Type toggle */}
      <div className="flex bg-[var(--bg-surface)] backdrop-blur-[20px] border border-[var(--border-soft)] rounded-pill p-0.5">
        {typeOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => onFilterChange({ ...filters, type: opt })}
            className={`px-3 py-1.5 rounded-pill text-xs font-outfit font-medium transition-all ${
              filters.type === opt
                ? "grad-primary text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-body)]"
            }`}
          >
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-[var(--bg-surface)] backdrop-blur-[20px] border border-[var(--border-soft)] rounded-pill px-3 py-2 w-60">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search transactions..."
          value={filters.search}
          onChange={(e) =>
            onFilterChange({ ...filters, search: e.target.value })
          }
          className="bg-transparent text-xs font-outfit text-[var(--text-body)] outline-none flex-1 placeholder:text-[var(--text-muted)]"
        />
      </div>
    </div>
  );
}
