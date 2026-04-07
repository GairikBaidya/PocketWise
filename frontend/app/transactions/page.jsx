"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import FilterBar from "@/components/transactions/FilterBar";
import TransactionTable from "@/components/transactions/TransactionTable";
import EmptyState from "@/components/transactions/EmptyState";
import { useFilteredTransactions } from "@/hooks/useFilteredTransactions";
import { transactions } from "@/lib/mockData";

export default function TransactionsPage() {
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    categories: [],
    type: "all",
    search: "",
  });

  const filtered = useFilteredTransactions(transactions, filters);

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="font-syne font-extrabold text-2xl text-[var(--text-heading)]">
            Transactions
          </h1>
          <p className="text-sm font-outfit text-[var(--text-muted)]">
            View and manage all your financial movements.
          </p>
        </div>

        <FilterBar filters={filters} onFilterChange={setFilters} />

        {filtered.length > 0 ? (
          <TransactionTable transactions={filtered} />
        ) : (
          <EmptyState />
        )}
      </motion.div>
    </AppShell>
  );
}
