"use client";

import React from "react";
import { motion } from "framer-motion";
import InsightCard from "./InsightCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function InsightGrid({ insights }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {insights.map((insight) => (
        <motion.div key={insight.id} variants={item}>
          <InsightCard insight={insight} />
        </motion.div>
      ))}
    </motion.div>
  );
}
