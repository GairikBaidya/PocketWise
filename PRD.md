# PocketWise — Smart Personal Finance Assistant
### Product Requirements Document | v2.0
> **Stack:** Next.js · Node.js · MySQL · Power BI | Portfolio-Grade Project

---

## Quick Stats

| Phases | Core Features | Timeline | Analytics |
|--------|--------------|----------|-----------|
| 3 Development Phases | 8 Feature Modules | 6–7 Weeks | Power BI |

---

## Table of Contents

1. [Product Vision & Overview](#1-product-vision--overview)
2. [System Architecture](#2-system-architecture)
3. [Database Design](#3-database-design)
4. [Core Features](#4-core-features)
5. [Feature Specifications](#5-feature-specifications)
6. [API Endpoints](#6-api-endpoints)
7. [Project Folder Structure](#7-project-folder-structure)
8. [Development Roadmap](#8-development-roadmap)
9. [Career Value & Future Scope](#9-career-value--future-scope)

---

## 1. Product Vision & Overview

PocketWise is a full-stack personal finance application that empowers users to track, analyze, and optimize their finances through an intuitive data entry system and a Power BI-powered analytics layer — combining real-world software engineering with business intelligence.

### The Problem
Users struggle to track expenses consistently, understand their spending behavior, and take actionable steps to improve savings. Existing apps are either too complex or lack meaningful insights.

### The Solution
**PocketWise = Simple data entry (Next.js) + Powerful analytics (Power BI).**
The app collects and stores data; Power BI surfaces insights, dashboards, and actionable suggestions.

### Target Users
- Students managing allowances and monthly budgets
- Young professionals tracking salary and discretionary spending
- Freelancers dealing with irregular income streams
- Anyone beginning their personal finance journey

---

## 2. System Architecture

PocketWise follows a clean three-tier architecture. The frontend handles user interaction and data entry, the backend exposes REST APIs and business logic, and Power BI acts as the entire analytics and visualization layer — connected directly to MySQL.

```
User (Next.js Frontend)
        ↓
REST API (Node.js / Express)
        ↓
MySQL Database
        ↓
Power BI Desktop  ←→  Power BI Service
        ↓
Embedded Dashboard in App
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js, React, Tailwind CSS |
| **Backend** | Node.js + Express, REST APIs |
| **Database** | MySQL |
| **Analytics** | Power BI Desktop, Power BI Service, DAX, RLS |

---

## 3. Database Design

A single well-normalized MySQL schema supports all users via `user_id` foreign keys. This is the correct multi-user pattern — **never create separate tables per user.**

### Schema Overview

#### `users`
| Column | Type | Notes |
|--------|------|-------|
| user_id | INT (PK) | Auto-increment |
| username | VARCHAR | Unique |
| email | VARCHAR | Unique |
| password_hash | VARCHAR | bcrypt |
| created_at | TIMESTAMP | — |

#### `transactions`
| Column | Type | Notes |
|--------|------|-------|
| transaction_id | INT (PK) | Auto-increment |
| user_id | INT (FK) | References users |
| category_id | INT (FK) | References categories |
| amount | DECIMAL | — |
| type | ENUM | `income` or `expense` |
| date | DATE | — |
| created_at | TIMESTAMP | — |

#### `categories`
| Column | Type | Notes |
|--------|------|-------|
| category_id | INT (PK) | Auto-increment |
| user_id | INT (FK) | NULL for global defaults |
| category_name | VARCHAR | — |

#### `budgets`
| Column | Type | Notes |
|--------|------|-------|
| budget_id | INT (PK) | Auto-increment |
| user_id | INT (FK) | References users |
| category_id | INT (FK) | References categories |
| monthly_limit | DECIMAL | — |

---

## 4. Core Features

| # | Feature | Description | Phase |
|---|---------|-------------|-------|
| 01 | **Authentication** | Signup/login with JWT. Username and strong password validation. | MVP |
| 02 | **Transaction Input** | Add income/expenses with predefined categories. Full edit and delete support. | MVP |
| 03 | **Power BI Dashboard** | Embedded Power BI report showing KPIs, charts, and category analysis connected live to MySQL. | MVP |
| 04 | **DAX Insights** | Smart narrative insights via Power BI Smart Narratives and custom DAX measures. | Phase 2 |
| 05 | **Budget Alerts** | User sets monthly budget per category. Warnings at 80%, alerts at 100%. | Phase 2 |
| 06 | **Data Filters** | Filter transactions by month, week, custom date range, and category. | Phase 2 |
| 07 | **AI Suggestions** | Rule-based suggestions in MVP; optional OpenAI/ML integration in Phase 3. | Phase 3 |
| 08 | **Export Report** | Export the Power BI dashboard as PDF/image or capture via html2canvas. | Phase 3 |

---

## 5. Feature Specifications

### 5.1 Authentication

Secure signup and login using JWT tokens. All protected routes require a valid token in the `Authorization` header.

| Field | Rules | Example |
|-------|-------|---------|
| **Username** | 4–20 characters, letters/numbers/underscore only | `gairik_123` |
| **Password** | 8+ characters, at least 1 uppercase, 1 lowercase, 1 number, 1 special character. Stored as bcrypt hash. | `Gairik@2026` |

---

### 5.2 Power BI Analytics Layer

Power BI is the **sole** dashboard and analytics engine. It connects directly to MySQL and is embedded into the Next.js application. This is what differentiates the project for Data Analyst and MIS roles.

#### Dashboard Components
- **KPI Cards:** Total Income, Total Expense, Savings, Savings Rate
- **Line Chart:** Monthly income vs expense trends
- **Bar Chart:** Category-by-category spending comparison
- **Pie Chart:** Expense distribution breakdown

#### DAX Measures

```dax
-- Savings
Savings = SUM(Income) - SUM(Expenses)

-- Savings Rate
Savings Rate = DIVIDE([Savings], SUM(Income)) * 100

-- Monthly Growth
Growth % = DIVIDE([Current Month] - [Previous Month], [Previous Month])
```

Top Categories: Use visual sorting by `SUM(amount)` per `category_id`.

#### Embedding Options

| Option | Details | Use Case |
|--------|---------|----------|
| **Publish to Web** | Free, public link, no login required | MVP / Portfolio demo |
| **Secure Embed** | Requires Power BI Service + Azure AD, supports RLS | Production |

#### Row-Level Security (RLS)

For multi-user production use, configure RLS in Power BI so each user only sees their own data.

```dax
[user_id] = USERPRINCIPALNAME()
```

---

### 5.3 Budget Alerts

Users set a `monthly_limit` per category in the `budgets` table. The backend alert service checks spending on every transaction save.

```
IF spent >= 0.8 * monthly_limit  →  ⚠️ Warning
"You have used 85% of your Food budget"

IF spent >= monthly_limit  →  🚨 Alert
"You have exceeded your Entertainment budget"
```

> Power BI Service native alerts can also be configured on KPI card thresholds to send email notifications.

---

### 5.4 AI Insights

Three implementation tiers — choose based on scope:

**Tier 1 — Rule-Based (MVP)**
Backend SQL logic. Runs on transaction save and generates messages.

- `"You are overspending on food by 25% compared to last month"`
- `"You can save ₹15,000 in 6 months at your current rate"`
- `"Reduce entertainment spending to save ₹2,000 monthly"`

**Tier 2 — Power BI Smart Narratives (Recommended)**
Built-in Power BI feature that auto-generates natural language summaries of chart data. Zero additional code required.

**Tier 3 — OpenAI API (Advanced)**
MySQL data → Backend → OpenAI API call → Response rendered in app UI.

---

## 6. API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/auth/signup` | Register new user — validate, hash password, store |
| `POST` | `/auth/login` | Authenticate user — return JWT token |
| `GET` | `/transactions` | Fetch all transactions for authenticated user (supports filter params) |
| `POST` | `/transactions` | Add new income or expense transaction |
| `PUT` | `/transactions/:id` | Update existing transaction |
| `DELETE` | `/transactions/:id` | Delete a transaction |
| `GET` | `/insights` | Return computed insight messages for the user |
| `GET` | `/alerts` | Return active budget alert messages for the user |
| `GET/POST` | `/budgets` | Get or set category budget limits |

---

## 7. Project Folder Structure

### Frontend (`/frontend`)
```
/frontend
├── /app
├── /components
│   ├── /Auth
│   ├── /Dashboard
│   ├── /Forms
│   └── PowerBIEmbed.js       ← Power BI embed wrapper
├── /services
│   └── api.js
├── /hooks
├── /utils
└── /styles
```

### Backend (`/backend`)
```
/backend
├── /controllers
│   ├── authController.js
│   ├── transactionController.js
│   └── insightController.js
├── /routes
│   ├── authRoutes.js
│   └── transactionRoutes.js
├── /middleware
│   └── authMiddleware.js
├── /services
│   ├── insightService.js
│   └── alertService.js
├── /config
│   └── db.js
└── server.js
```

### Power BI & Database (`/powerbi`, `/database`)
```
/powerbi
├── pocketwise.pbix            ← Main Power BI report file
├── measures.dax               ← All DAX measure definitions
└── dataset_structure.md       ← MySQL → Power BI field mapping

/database
├── schema.sql
└── seed.sql
```

---

## 8. Development Roadmap

### Phase 1 — MVP Core (2–3 weeks)
- [ ] MySQL schema setup (`users`, `transactions`, `categories`, `budgets`)
- [ ] Auth system (signup, login, JWT middleware)
- [ ] Transaction CRUD (add, edit, delete income and expenses)
- [ ] Power BI Desktop connected to MySQL
- [ ] Basic KPI dashboard embedded in Next.js (Publish to Web)

### Phase 2 — Smart Features (2 weeks)
- [ ] Budget alerts engine (backend, 80% / 100% thresholds)
- [ ] Rule-based insight messages
- [ ] Data filters (monthly, weekly, custom date range, category)
- [ ] Power BI Smart Narratives enabled
- [ ] Row-Level Security configured in Power BI

### Phase 3 — Advanced & Polish (1–2 weeks)
- [ ] AI suggestions (OpenAI API integration — optional)
- [ ] Export report (Power BI PDF export or html2canvas capture)
- [ ] UI polish and performance optimization
- [ ] Final portfolio writeup

---

## 9. Career Value & Future Scope

### 9.1 Skills Demonstrated

| Technical | Analytics | Product |
|-----------|-----------|---------|
| Full-stack development | Power BI dashboard design | PRD & system design |
| REST API design | DAX measure writing | Multi-user architecture |
| SQL + data modeling | Row-Level Security | Alert & insight logic |
| JWT authentication | Business insight logic | Real-world use case |

> This project is ideal for roles in **Data Analysis**, **MIS Executive**, **Reporting Analyst**, and **Full-Stack Development**.

### 9.2 Future Scope
- AI financial advisor with conversational interface
- Expense prediction using ML models
- Mobile app (React Native)
- Bank API integration for automatic transaction import
- Voice input for hands-free expense logging
- Multi-currency support

---

> **Start Simple. Scale Smart.**
> `Auth → Transactions → Power BI Dashboard → Insights → AI`
