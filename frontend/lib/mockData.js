// ─── User ───────────────────────────────────────────────
export const currentUser = {
  name: "Gairik",
  email: "gairik@pocket.io",
  currency: "INR",
};

// ─── Categories ─────────────────────────────────────────
export const categories = [
  { id: "cat-1", name: "Salary", icon: "💼", color: "#7C3AED" },
  { id: "cat-2", name: "Food", icon: "🍔", color: "#EC4899" },
  { id: "cat-3", name: "Transport", icon: "🚗", color: "#06B6D4" },
  { id: "cat-4", name: "Entertainment", icon: "🎬", color: "#F59E0B" },
  { id: "cat-5", name: "Health", icon: "💊", color: "#10B981" },
  { id: "cat-6", name: "Shopping", icon: "🛍️", color: "#8B5CF6" },
  { id: "cat-7", name: "Utilities", icon: "⚡", color: "#F97316" },
];

// ─── Transactions ───────────────────────────────────────
export const transactions = [
  {
    id: "txn-01",
    date: "2026-04-05",
    category: "Salary",
    description: "Monthly salary — April",
    type: "income",
    amount: 84500,
  },
  {
    id: "txn-02",
    date: "2026-04-04",
    category: "Food",
    description: "Swiggy dinner order",
    type: "expense",
    amount: 620,
  },
  {
    id: "txn-03",
    date: "2026-04-03",
    category: "Transport",
    description: "Uber to office",
    type: "expense",
    amount: 340,
  },
  {
    id: "txn-04",
    date: "2026-04-03",
    category: "Entertainment",
    description: "Netflix subscription",
    type: "expense",
    amount: 649,
  },
  {
    id: "txn-05",
    date: "2026-04-02",
    category: "Shopping",
    description: "Amazon — wireless earbuds",
    type: "expense",
    amount: 2499,
  },
  {
    id: "txn-06",
    date: "2026-04-01",
    category: "Utilities",
    description: "Electricity bill — March",
    type: "expense",
    amount: 1840,
  },
  {
    id: "txn-07",
    date: "2026-03-31",
    category: "Food",
    description: "Grocery — Big Basket",
    type: "expense",
    amount: 3200,
  },
  {
    id: "txn-08",
    date: "2026-03-30",
    category: "Health",
    description: "Apollo Pharmacy medicines",
    type: "expense",
    amount: 890,
  },
  {
    id: "txn-09",
    date: "2026-03-29",
    category: "Transport",
    description: "Metro recharge",
    type: "expense",
    amount: 500,
  },
  {
    id: "txn-10",
    date: "2026-03-28",
    category: "Entertainment",
    description: "PVR movie tickets",
    type: "expense",
    amount: 980,
  },
  {
    id: "txn-11",
    date: "2026-03-27",
    category: "Food",
    description: "Zomato lunch",
    type: "expense",
    amount: 450,
  },
  {
    id: "txn-12",
    date: "2026-03-26",
    category: "Shopping",
    description: "Myntra — sneakers",
    type: "expense",
    amount: 4200,
  },
  {
    id: "txn-13",
    date: "2026-03-25",
    category: "Utilities",
    description: "Wi-Fi bill — March",
    type: "expense",
    amount: 999,
  },
  {
    id: "txn-14",
    date: "2026-03-24",
    category: "Health",
    description: "Gym membership — quarterly",
    type: "expense",
    amount: 4500,
  },
  {
    id: "txn-15",
    date: "2026-03-23",
    category: "Transport",
    description: "Ola ride — airport",
    type: "expense",
    amount: 1200,
  },
  {
    id: "txn-16",
    date: "2026-03-22",
    category: "Food",
    description: "Cafe Coffee Day",
    type: "expense",
    amount: 280,
  },
  {
    id: "txn-17",
    date: "2026-03-20",
    category: "Entertainment",
    description: "Spotify annual plan",
    type: "expense",
    amount: 1189,
  },
  {
    id: "txn-18",
    date: "2026-03-18",
    category: "Shopping",
    description: "Flipkart — book bundle",
    type: "expense",
    amount: 1350,
  },
  {
    id: "txn-19",
    date: "2026-03-15",
    category: "Salary",
    description: "Freelance project payment",
    type: "income",
    amount: 25000,
  },
  {
    id: "txn-20",
    date: "2026-03-10",
    category: "Utilities",
    description: "Water bill — Feb",
    type: "expense",
    amount: 350,
  },
];

// ─── Budgets ────────────────────────────────────────────
export const budgets = [
  {
    id: "bud-1",
    category: "Food",
    icon: "🍔",
    monthlyLimit: 20000,
    spent: 14400,
    variant: "green",
  },
  {
    id: "bud-2",
    category: "Entertainment",
    icon: "🎬",
    monthlyLimit: 10000,
    spent: 8700,
    variant: "amber",
  },
  {
    id: "bud-3",
    category: "Transport",
    icon: "🚗",
    monthlyLimit: 10000,
    spent: 10800,
    variant: "red",
  },
  {
    id: "bud-4",
    category: "Health",
    icon: "💊",
    monthlyLimit: 8000,
    spent: 4200,
    variant: "green",
  },
  {
    id: "bud-5",
    category: "Shopping",
    icon: "🛍️",
    monthlyLimit: 15000,
    spent: 11800,
    variant: "green",
  },
  {
    id: "bud-6",
    category: "Utilities",
    icon: "⚡",
    monthlyLimit: 5000,
    spent: 3100,
    variant: "green",
  },
];

// ─── Insights ───────────────────────────────────────────
export const insights = [
  {
    id: "ins-1",
    icon: "📉",
    headline: "Food spending dropped 18%",
    body: "Your food expenses decreased compared to last month. Cooking at home more? Keep it up!",
    variant: "positive",
  },
  {
    id: "ins-2",
    icon: "⚠️",
    headline: "Transport budget exceeded",
    body: "You've spent ₹10,800 against a ₹10,000 limit. Consider carpooling or using public transit.",
    variant: "danger",
  },
  {
    id: "ins-3",
    icon: "🔔",
    headline: "Entertainment nearing limit",
    body: "87% of your entertainment budget is used with 8 days remaining. Pace your spending.",
    variant: "warning",
  },
  {
    id: "ins-4",
    icon: "💡",
    headline: "Savings rate at 42%",
    body: "Your savings rate is excellent! You saved ₹46,000 this month — above your 35% target.",
    variant: "positive",
  },
  {
    id: "ins-5",
    icon: "📊",
    headline: "Recurring payments stable",
    body: "Your 5 recurring subscriptions total ₹3,837/month. No unexpected changes detected.",
    variant: "neutral",
  },
  {
    id: "ins-6",
    icon: "🎯",
    headline: "Emergency fund milestone",
    body: "You're 78% toward your 6-month emergency fund goal. Consider redirecting ₹5K more.",
    variant: "positive",
  },
];

// ─── Chart Data ─────────────────────────────────────────
export const chartData = [
  { month: "Nov", income: 82000, expense: 41000 },
  { month: "Dec", income: 90000, expense: 52000 },
  { month: "Jan", income: 85000, expense: 45000 },
  { month: "Feb", income: 88000, expense: 48000 },
  { month: "Mar", income: 109500, expense: 43000 },
  { month: "Apr", income: 84500, expense: 38500 },
];

// ─── Sparkline Data ─────────────────────────────────────
export const sparklineData = {
  income: [82, 90, 85, 88, 109, 84],
  expenses: [41, 52, 45, 48, 43, 38],
  savings: [41, 38, 40, 40, 66, 46],
};

// ─── Navigation Items ───────────────────────────────────
export const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Transactions", href: "/transactions", icon: "💳" },
  { label: "Budgets", href: "/budgets", icon: "🎯" },
  { label: "Insights", href: "/insights", icon: "💡" },
  { label: "Reports", href: "/reports", icon: "📄" },
  { label: "Settings", href: "/settings", icon: "⚙️" },
];

// ─── KPI Summary ────────────────────────────────────────
export const kpiSummary = {
  totalIncome: 109500,
  totalExpenses: 38500,
  netSavings: 71000,
  savingsRate: 65,
};
