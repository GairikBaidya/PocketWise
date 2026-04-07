"use client";

import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-xs font-outfit font-medium text-[var(--text-muted)] uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2.5 rounded-btn
            bg-white/80 text-[var(--text-body)] font-outfit text-sm
            border border-[var(--border-soft)]
            placeholder:text-[var(--text-muted)]
            focus:outline-none focus:border-[var(--accent-violet)]
            focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]
            transition-all duration-200
            ${error ? "border-red-400 focus:border-red-400" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-outfit">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
