"use client";

import React from "react";
import { motion } from "framer-motion";
import BudgetCard from "./BudgetCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BudgetGrid({ budgets }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {budgets.map((budget) => (
        <motion.div key={budget.id} variants={item}>
          <BudgetCard budget={budget} />
        </motion.div>
      ))}
    </motion.div>
  );
}
