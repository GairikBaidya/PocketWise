"use client";

import React from "react";
import { motion } from "framer-motion";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Toggle from "@/components/ui/Toggle";

export default function SecurityTab() {
  const [twoFactor, setTwoFactor] = React.useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5 max-w-2xl"
    >
      {/* Password */}
      <div className="glass-card p-6">
        <h3 className="font-syne font-bold text-lg text-[var(--text-heading)] mb-4">
          Change Password
        </h3>
        <div className="space-y-4 mb-5">
          <Input label="Current Password" type="password" placeholder="••••••••" />
          <Input label="New Password" type="password" placeholder="••••••••" />
          <Input
            label="Confirm New Password"
            type="password"
            placeholder="••••••••"
          />
        </div>
        <Button variant="primary">Update Password</Button>
      </div>

      {/* Two Factor */}
      <div className="glass-card p-6">
        <h3 className="font-syne font-bold text-lg text-[var(--text-heading)] mb-4">
          Two-Factor Authentication
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-outfit text-[var(--text-body)]">
              Enable 2FA for enhanced security
            </p>
            <p className="text-xs font-outfit text-[var(--text-muted)]">
              We&lsquo;ll send a verification code to your phone
            </p>
          </div>
          <Toggle checked={twoFactor} onChange={setTwoFactor} />
        </div>
      </div>

      {/* Sessions */}
      <div className="glass-card p-6">
        <h3 className="font-syne font-bold text-lg text-[var(--text-heading)] mb-4">
          Active Sessions
        </h3>
        <div className="space-y-3">
          {[
            {
              device: "Chrome on Windows",
              location: "Kolkata, IN",
              current: true,
            },
            {
              device: "Safari on iPhone",
              location: "Kolkata, IN",
              current: false,
            },
          ].map((session, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-btn bg-[var(--surface-container)]"
            >
              <div>
                <p className="text-sm font-outfit font-medium text-[var(--text-heading)]">
                  {session.device}
                </p>
                <p className="text-[11px] font-outfit text-[var(--text-muted)]">
                  {session.location}
                </p>
              </div>
              {session.current ? (
                <span className="text-[10px] font-outfit font-semibold text-[var(--accent-green)] bg-[rgba(16,185,129,0.1)] px-2 py-0.5 rounded-full">
                  Current
                </span>
              ) : (
                <Button variant="ghost" className="text-xs py-1 px-2">
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
