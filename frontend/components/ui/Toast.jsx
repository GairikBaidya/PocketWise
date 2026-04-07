"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variantColors = {
  success: "linear-gradient(135deg, #10B981, #34D399)",
  warning: "linear-gradient(135deg, #F59E0B, #FCD34D)",
  error: "linear-gradient(135deg, #EF4444, #F87171)",
};

export default function Toast({
  title,
  subtitle,
  icon,
  variant,
  isVisible,
}) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
    if (isVisible) {
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3
            p-4 bg-white rounded-[14px] shadow-glow-lg
            border border-[rgba(124,58,237,0.15)]
            max-w-sm"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex-shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center text-lg"
            style={{ background: variantColors[variant] }}
          >
            {icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-outfit font-semibold text-[var(--text-heading)] truncate">
              {title}
            </p>
            <p className="text-xs font-outfit text-[var(--text-muted)] truncate">
              {subtitle}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
