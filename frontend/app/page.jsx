"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-page)]">
      {/* Background blobs */}
      <div className="blob blob-violet" />
      <div className="blob blob-pink" />
      <div className="blob blob-cyan" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Hero */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 rounded-[10px] grad-primary flex items-center justify-center">
              <span className="text-white text-base font-bold font-mono">₹</span>
            </div>
            <span className="font-syne font-extrabold text-xl gradient-text">
              PocketWise
            </span>
          </div>

          <h1 className="font-syne font-extrabold text-5xl lg:text-6xl text-[var(--text-heading)] leading-[1.1] mb-5">
            Your money,
            <br />
            <span className="gradient-text">finally making sense.</span>
          </h1>

          <p className="text-base font-outfit text-[var(--text-muted)] mb-8 max-w-md leading-relaxed">
            Experience the first digital sanctuary for your wealth. We transform
            complex data into beautiful, actionable editorial insights.
          </p>

          {/* Stats row */}
          <div className="flex gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card px-5 py-3"
            >
              <p className="text-[11px] font-outfit text-[var(--text-muted)] mb-0.5">
                Total Savings
              </p>
              <p className="font-mono font-bold text-lg text-[var(--accent-violet)]">
                ₹2.4L saved
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="glass-card px-5 py-3"
            >
              <p className="text-[11px] font-outfit text-[var(--text-muted)] mb-0.5">
                Activity
              </p>
              <p className="font-mono font-bold text-lg text-[var(--accent-pink)]">
                847 items
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Auth Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card-elevated p-8 shadow-glow-lg max-w-md mx-auto w-full"
        >
          {/* Tab Toggle */}
          <div className="relative flex bg-[#F0EBFF] rounded-btn p-1 mb-6">
            <motion.div
              className="absolute top-1 bottom-1 rounded-[10px] grad-primary"
              style={{ width: "calc(50% - 4px)" }}
              animate={{
                x: activeTab === "login" ? 0 : "calc(100% + 4px)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab("login")}
              className={`relative z-10 flex-1 py-2 text-sm font-outfit font-semibold rounded-[10px] transition-colors ${
                activeTab === "login"
                  ? "text-white"
                  : "text-[var(--text-muted)]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`relative z-10 flex-1 py-2 text-sm font-outfit font-semibold rounded-[10px] transition-colors ${
                activeTab === "signup"
                  ? "text-white"
                  : "text-[var(--text-muted)]"
              }`}
            >
              Sign Up
            </button>
          </div>

          {activeTab === "login" ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-syne font-bold text-xl text-[var(--text-heading)] mb-1">
                Welcome back
              </h2>
              <p className="text-xs font-outfit text-[var(--text-muted)] mb-5">
                Enter your credentials to access your sanctuary.
              </p>
              <div className="space-y-4 mb-5">
                <Input
                  label="Email"
                  type="email"
                  placeholder="gairik@pocket.io"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between mb-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[var(--accent-violet)] w-3.5 h-3.5"
                  />
                  <span className="text-xs font-outfit text-[var(--text-muted)]">
                    Remember me
                  </span>
                </label>
                <button className="text-xs font-outfit font-medium text-[var(--accent-violet)] hover:underline">
                  Forgot password?
                </button>
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={() => (window.location.href = "/dashboard")}
              >
                Sign In
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-syne font-bold text-xl text-[var(--text-heading)] mb-1">
                Create your sanctuary
              </h2>
              <p className="text-xs font-outfit text-[var(--text-muted)] mb-5">
                Start your journey to financial clarity.
              </p>
              <div className="space-y-4 mb-5">
                <Input label="Full Name" placeholder="Gairik Baidya" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="gairik@pocket.io"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={() => (window.location.href = "/dashboard")}
              >
                Create Account
              </Button>
            </motion.div>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[var(--border-soft)]" />
            <span className="text-[10px] font-outfit text-[var(--text-muted)]">
              OR
            </span>
            <div className="flex-1 h-px bg-[var(--border-soft)]" />
          </div>

          <Button variant="secondary" fullWidth>
            Continue with Google
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
