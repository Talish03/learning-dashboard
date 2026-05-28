"use client";

import { motion } from "framer-motion";
import { Flame, ArrowUpRight } from "lucide-react";
import { BentoTile } from "./BentoTile";

const STREAK = 12;
const DOT_COUNT = 7; // last 7 days

export function HeroTile() {
  const today = new Date();
  const days = Array.from({ length: DOT_COUNT }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (DOT_COUNT - 1 - i));
    return {
      label: d.toLocaleDateString("en-US", { weekday: "short" }),
      active: i >= DOT_COUNT - (STREAK % DOT_COUNT),
    };
  });

  return (
    <BentoTile glowColor="violet" className="min-h-[180px] lg:min-h-[200px]">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(at 15% 30%, hsla(228,100%,74%,0.18) 0px, transparent 55%), radial-gradient(at 80% 10%, hsla(263,100%,70%,0.14) 0px, transparent 50%), radial-gradient(at 50% 90%, hsla(205,100%,60%,0.1) 0px, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full p-5 lg:p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 font-semibold mb-1 tracking-wide uppercase">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1
              className="text-2xl lg:text-3xl font-bold text-slate-100 leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            <p className="text-slate-400 text-sm mt-1.5">
              You have 3 lessons due this week. Keep the momentum going!
            </p>
          </div>

          {/* Streak badge */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px 2px rgba(251,191,36,0.25)",
                "0 0 22px 6px rgba(251,191,36,0.5)",
                "0 0 10px 2px rgba(251,191,36,0.25)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="
              shrink-0 flex flex-col items-center justify-center
              w-[72px] h-[72px] rounded-2xl
              bg-gradient-to-br from-amber-500/20 to-orange-500/10
              border border-amber-500/25
            "
          >
            <Flame size={22} className="text-amber-400 mb-0.5" />
            <span className="text-xl font-bold text-amber-400" style={{ fontFamily: "Syne, sans-serif" }}>
              {STREAK}
            </span>
            <span className="text-[9px] text-amber-500/80 font-medium uppercase tracking-wider">
              streak
            </span>
          </motion.div>
        </div>

        {/* Streak week dots */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xs text-slate-600 font-medium mr-1">This week:</span>
          {days.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 400, damping: 20 }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  day.active
                    ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                    : "bg-white/[0.08]"
                }`}
              />
              <span className="text-[9px] text-slate-600">{day.label[0]}</span>
            </div>
          ))}

          <a
            href="#"
            className="ml-auto flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </BentoTile>
  );
}
