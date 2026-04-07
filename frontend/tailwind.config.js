/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        violet: { brand: "#7C3AED" },
        pink: { brand: "#EC4899" },
        cyan: { brand: "#06B6D4" },
        amber: { brand: "#F59E0B" },
        green: { brand: "#10B981" },
        page: "#F7F3FF",
        surface: "rgba(255,255,255,0.75)",
        elevated: "rgba(255,255,255,0.9)",
        heading: "#1F0A3C",
        body: "#374151",
        muted: "#9CA3AF",
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
        pill: "10px",
        "full-pill": "20px",
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        glow: "0 4px 32px rgba(124, 58, 237, 0.08)",
        "glow-lg": "0 8px 48px rgba(124, 58, 237, 0.12)",
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "blob-float": "blobFloat 8s ease-in-out alternate infinite",
        "pulse-shadow": "pulseShadow 2s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        blobFloat: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(20px,30px) scale(1.08)" },
        },
        pulseShadow: {
          "0%, 100%": { boxShadow: "0 4px 14px rgba(124,58,237,0.4)" },
          "50%": { boxShadow: "0 4px 22px rgba(236,72,153,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
