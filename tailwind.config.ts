/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#080a0f",
          surface: "#0e1117",
          elevated: "#141720",
          overlay: "#1a1f2e",
        },
        accent: {
          blue: "#3b82f6",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
          DEFAULT: "rgba(255,255,255,0.10)",
          strong: "rgba(255,255,255,0.18)",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#cbd5e1",
          muted: "#64748b",
        },
      },
      textColor: {
        "text-primary": "#f1f5f9",
        "text-secondary": "#cbd5e1",
        "text-muted": "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-blue-violet":
          "radial-gradient(at 40% 20%, hsla(228,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(263,100%,70%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(205,100%,60%,0.08) 0px, transparent 50%)",
        "mesh-emerald":
          "radial-gradient(at 30% 20%, hsla(162,100%,50%,0.15) 0px, transparent 50%), radial-gradient(at 70% 80%, hsla(200,100%,60%,0.10) 0px, transparent 50%)",
        "mesh-amber":
          "radial-gradient(at 50% 10%, hsla(38,100%,60%,0.15) 0px, transparent 50%), radial-gradient(at 80% 90%, hsla(20,100%,60%,0.10) 0px, transparent 50%)",
        "mesh-rose":
          "radial-gradient(at 20% 30%, hsla(340,100%,60%,0.15) 0px, transparent 50%), radial-gradient(at 90% 70%, hsla(290,100%,60%,0.10) 0px, transparent 50%)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "streak-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(251,191,36,0.3)" },
          "50%": { boxShadow: "0 0 20px 6px rgba(251,191,36,0.6)" },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "streak-glow": "streak-glow 2s ease-in-out infinite",
      },
      boxShadow: {
        "glow-blue": "0 0 20px -5px rgba(59,130,246,0.5)",
        "glow-violet": "0 0 20px -5px rgba(139,92,246,0.5)",
        "glow-emerald": "0 0 20px -5px rgba(16,185,129,0.5)",
        "glow-amber": "0 0 20px -5px rgba(245,158,11,0.5)",
        "glow-rose": "0 0 20px -5px rgba(244,63,94,0.5)",
        "tile": "0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
