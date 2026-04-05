CREATE DATABASE IF NOT EXISTS pocketwise_db;
USE pocketwise_db;

select *
from transctions;

-- 1. Monthly Income vs Expense
SELECT 
  DATE_FORMAT(date, '%Y-%m') AS month,
  SUM(CASE WHEN type='income' THEN amount ELSE 0 END) AS total_income,
  SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) AS total_expense,
  SUM(CASE WHEN type='income' THEN amount ELSE -amount END) AS savings
FROM transactions
WHERE user_id = 1
GROUP BY month
ORDER BY month;

SELECT 
  c.category_name,
  SUM(t.amount) AS spent,
  b.monthly_limit AS budget,
  ROUND(SUM(t.amount) / b.monthly_limit * 100, 1) AS pct_used,
  CASE 
    WHEN SUM(t.amount) >= b.monthly_limit THEN '🚨 Exceeded'
    WHEN SUM(t.amount) >= b.monthly_limit * 0.8 THEN '⚠️ Warning'
    ELSE '✅ OK'
  END AS alert_status
FROM transactions t
JOIN categories c ON t.category_id = c.category_id
JOIN budgets b ON t.category_id = b.category_id AND t.user_id = b.user_id
WHERE t.type = 'expense'
  AND DATE_FORMAT(t.date, '%Y-%m') = (
      SELECT DATE_FORMAT(MAX(date), '%Y-%m')   -- ← always picks latest month
      FROM transactions
  )
GROUP BY c.category_name, b.monthly_limit;

-- 3. Top 3 Spending Categories
SELECT c.category_name, SUM(t.amount) AS total_spent
FROM transactions t
JOIN categories c ON t.category_id = c.category_id
WHERE t.type = 'expense' AND t.user_id = 1
GROUP BY c.category_name
ORDER BY total_spent DESC
LIMIT 3;

-- 4. Month-over-Month Expense Growth
SELECT 
  month,
  total_expense,
  LAG(total_expense) OVER (ORDER BY month) AS prev_month,
  ROUND((total_expense - LAG(total_expense) OVER (ORDER BY month)) 
    / LAG(total_expense) OVER (ORDER BY month) * 100, 1) AS growth_pct
FROM (
  SELECT DATE_FORMAT(date,'%Y-%m') AS month, SUM(amount) AS total_expense
  FROM transactions WHERE type='expense' AND user_id=1
  GROUP BY month
) monthly;