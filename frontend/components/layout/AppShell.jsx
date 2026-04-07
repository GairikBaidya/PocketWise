"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Background blobs */}
      <div className="blob blob-violet" />
      <div className="blob blob-pink" />
      <div className="blob blob-cyan" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 ml-[240px] flex flex-col relative z-10">
        <Topbar />
        <main className="flex-1 px-8 py-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
