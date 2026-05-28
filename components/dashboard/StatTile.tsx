"use client";

import { LucideIcon } from "lucide-react";
import { BentoTile } from "./BentoTile";

type AccentColor = "blue" | "violet" | "emerald" | "amber" | "rose" | "cyan";

interface StatTileProps {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: LucideIcon;
  accent: AccentColor;
}

const accentMap: Record<AccentColor, { text: string; bg: string; border: string; glow: AccentColor }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/30", glow: "blue" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/15", border: "border-violet-500/30", glow: "violet" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30", glow: "emerald" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30", glow: "amber" },
  rose: { text: "text-rose-400", bg: "bg-rose-500/15", border: "border-rose-500/30", glow: "rose" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/30", glow: "cyan" },
};

export function StatTile({ label, value, delta, positive, icon: Icon, accent }: StatTileProps) {
  const colors = accentMap[accent];

  return (
    <BentoTile glowColor={colors.glow} className="h-full min-h-[120px]">
      <div className="relative z-10 flex flex-col justify-between h-full p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {label}
          </span>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colors.bg} ${colors.border}`}>
            <Icon size={15} className={colors.text} />
          </div>
        </div>

        <div>
          <p
            className="text-2xl font-bold text-slate-100 mt-2"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {value}
          </p>
          <p className={`text-xs font-medium mt-1 ${positive ? "text-emerald-400" : "text-rose-400"}`}>
            {delta}
          </p>
        </div>
      </div>
    </BentoTile>
  );
}
