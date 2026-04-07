"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import { categories } from "@/lib/mockData";

export default function AddTransactionModal({
  isOpen,
  onClose,
}) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[1].name);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    // Mock save — in real app, this would call an API
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Transaction">
      {/* Type Toggle */}
      <div className="relative flex bg-[#F0EBFF] rounded-btn p-1 mb-6">
        <motion.div
          className="absolute top-1 bottom-1 rounded-[10px]"
          style={{
            width: "calc(50% - 4px)",
            background:
              type === "expense"
                ? "linear-gradient(135deg, #EF4444, #F87171)"
                : "linear-gradient(135deg, #10B981, #34D399)",
          }}
          animate={{ x: type === "expense" ? 0 : "calc(100% + 4px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
        <button
          onClick={() => setType("expense")}
          className={`relative z-10 flex-1 py-2.5 text-sm font-outfit font-semibold rounded-[10px] transition-colors ${
            type === "expense" ? "text-white" : "text-[var(--text-muted)]"
          }`}
        >
          💸 Expense
        </button>
        <button
          onClick={() => setType("income")}
          className={`relative z-10 flex-1 py-2.5 text-sm font-outfit font-semibold rounded-[10px] transition-colors ${
            type === "income" ? "text-white" : "text-[var(--text-muted)]"
          }`}
        >
          💰 Income
        </button>
      </div>

      {/* Amount */}
      <div className="mb-5 text-center">
        <div className="flex items-center justify-center gap-1">
          <span className="font-mono font-bold text-2xl text-[var(--text-muted)]">
            ₹
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="font-mono font-bold text-[40px] text-[var(--text-heading)]
              bg-transparent border-none outline-none text-center w-48
              border-b-2 border-[var(--border-soft)] focus:border-[var(--accent-violet)]
              transition-colors"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <Input
          label="Description"
          placeholder="What was this for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="text-xs font-outfit font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1.5 block">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2.5 rounded-btn bg-white/80 text-[var(--text-body)]
            font-outfit text-sm border border-[var(--border-soft)]
            focus:outline-none focus:border-[var(--accent-violet)]
            focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]
            transition-all duration-200 appearance-none cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div className="mb-4">
        <Input
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Notes */}
      <div className="mb-6">
        <label className="text-xs font-outfit font-medium text-[var(--text-muted)] uppercase tracking-wider mb-1.5 block">
          Notes (optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any additional notes..."
          rows={2}
          className="w-full px-4 py-2.5 rounded-btn bg-transparent text-[var(--text-body)]
            font-outfit text-sm border border-[var(--border-soft)]
            placeholder:text-[var(--text-muted)]
            focus:outline-none focus:border-[var(--accent-violet)]
            focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]
            transition-all duration-200 resize-none"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="ghost" onClick={onClose} className="flex-1">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave} fullWidth className="flex-[2]">
          Save Transaction
        </Button>
      </div>
    </Modal>
  );
}
