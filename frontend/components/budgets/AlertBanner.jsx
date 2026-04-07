"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AlertBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-5 p-4 rounded-card bg-gradient-to-r from-red-50 to-orange-50
        border border-red-200/60 flex items-center gap-3"
    >
      <div className="w-9 h-9 rounded-btn bg-red-100 flex items-center justify-center text-lg flex-shrink-0">
        🚨
      </div>
      <div>
        <p className="text-sm font-outfit font-semibold text-red-700">
          Budget Alert: Transport exceeded by ₹800
        </p>
        <p className="text-xs font-outfit text-red-500/80">
          Your transport spending has crossed the monthly limit. Review your
          expenses to stay on track.
        </p>
      </div>
    </motion.div>
  );
}
