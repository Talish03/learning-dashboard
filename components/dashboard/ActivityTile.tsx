"use client";

import { motion } from "framer-motion";
import { BentoTile } from "./BentoTile";
import { generateActivityData } from "@/lib/utils";
import { ActivitySquare } from "lucide-react";

const WEEKS = 18;
const data = generateActivityData(WEEKS);

const COLOR_MAP = [
  "bg-white/[0.05]",       // 0 — no activity
  "bg-blue-500/25",         // 1 — light
  "bg-blue-500/45",         // 2 — medium
  "bg-blue-400/65",         // 3 — high
  "bg-blue-400",            // 4 — max
];

export function ActivityTile() {
  // Chunk into weeks
  const weeks: typeof data[] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const totalActive = data.filter((d) => d.count > 0).length;

  return (
    <BentoTile glowColor="cyan" className="min-h-[180px]">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(at 10% 50%, hsla(205,100%,60%,0.14) 0px, transparent 60%)",
        }}
      />

      <div className="relative z-10 p-5 lg:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ActivitySquare size={15} className="text-cyan-400" />
            <h2
              className="text-sm font-semibold text-slate-100"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Learning Activity
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            <span className="text-slate-400 font-medium">{totalActive}</span> active days
          </span>
        </div>

        {/* Day labels */}
        <div className="flex gap-[3px] mb-1.5 ml-[1px]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div
              key={i}
              className="w-[11px] text-[8px] text-slate-600 font-medium text-center"
              style={{ flexShrink: 0 }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Grid (transposed: columns = weeks, rows = days) */}
        <div className="flex gap-[3px] overflow-hidden">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <motion.div
                  key={`${wi}-${di}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: (wi * 7 + di) * 0.003,
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  title={`${day.date}: ${day.count} sessions`}
                  className={`
                    w-[11px] h-[11px] rounded-[2px] shrink-0
                    ${COLOR_MAP[day.count]}
                    transition-colors
                    ${day.count > 0 ? "cursor-pointer hover:brightness-125" : ""}
                  `}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3 justify-end">
          <span className="text-[10px] text-text-muted">Less</span>
          {COLOR_MAP.map((cls, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-[2px] ${cls}`} />
          ))}
          <span className="text-[10px] text-text-muted">More</span>
        </div>
      </div>
    </BentoTile>
  );
}
