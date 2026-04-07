"use client";

import React from "react";

export default function CategoryPill({ name, icon, color }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-outfit font-medium"
      style={{
        backgroundColor: `${color}14`,
        color: color,
      }}
    >
      <span>{icon}</span>
      {name}
    </span>
  );
}
