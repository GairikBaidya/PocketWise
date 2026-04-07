"use client";

import React from "react";
import { motion } from "framer-motion";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { currentUser } from "@/lib/mockData";

export default function ProfileTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 max-w-2xl"
    >
      <h3 className="font-syne font-bold text-lg text-[var(--text-heading)] mb-5">
        Profile Information
      </h3>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full grad-primary flex items-center justify-center text-white font-syne font-bold text-2xl">
          {currentUser.name.charAt(0)}
        </div>
        <div>
          <p className="font-outfit font-semibold text-[var(--text-heading)]">
            {currentUser.name}
          </p>
          <p className="text-xs font-outfit text-[var(--text-muted)]">
            Premium Member since Jan 2026
          </p>
          <button className="text-xs font-outfit font-medium text-[var(--accent-violet)] mt-1 hover:underline">
            Change avatar
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Input label="Full Name" defaultValue={currentUser.name} />
        <Input label="Email" type="email" defaultValue={currentUser.email} />
        <Input label="Phone" type="tel" defaultValue="+91 98765 43210" />
        <Input label="Currency" defaultValue={currentUser.currency} disabled />
      </div>

      <Button variant="primary">Save Changes</Button>
    </motion.div>
  );
}
