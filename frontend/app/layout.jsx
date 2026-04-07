import { Syne, Outfit, Space_Mono } from "next/font/google";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata = {
  title: "PocketWise — Smart Personal Finance",
  description:
    "Your digital sanctuary for wealth. Transform complex financial data into beautiful, actionable insights with PocketWise.",
  keywords: ["finance", "budgeting", "personal finance", "expense tracker", "PocketWise"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${spaceMono.variable}`}
    >
      <body className="font-outfit antialiased">
        {children}
      </body>
    </html>
  );
}
