"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ExportCard({
  icon,
  title,
  description,
  format,
  onExport,
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="glass-card p-5 flex flex-col"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-btn grad-primary flex items-center justify-center text-lg flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-outfit font-semibold text-sm text-[var(--text-heading)]">
            {title}
          </h4>
          <p className="text-xs font-outfit text-[var(--text-muted)] mt-0.5">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[rgba(124,58,237,0.06)]">
        <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
          {format}
        </span>
        <Button variant="secondary" onClick={onExport} className="text-xs py-1.5 px-3">
          Export
        </Button>
      </div>
    </motion.div>
  );
}
