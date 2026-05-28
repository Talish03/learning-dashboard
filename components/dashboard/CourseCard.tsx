"use client";

import { Course } from "@/types";
import { BentoTile } from "./BentoTile";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ArrowUpRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const CARD_THEMES: {
  mesh: string;
  accent: string;
  progress: string;
  glow: "blue" | "violet" | "emerald" | "amber" | "rose" | "cyan";
  iconBg: string;
}[] = [
  {
    mesh: "radial-gradient(at 20% 20%, hsla(228,100%,74%,0.18) 0px, transparent 55%), radial-gradient(at 80% 80%, hsla(263,100%,70%,0.12) 0px, transparent 50%)",
    accent: "text-blue-400",
    progress: "from-blue-500 to-violet-500",
    glow: "blue",
    iconBg: "bg-blue-500/15 border-blue-500/20",
  },
  {
    mesh: "radial-gradient(at 70% 20%, hsla(162,100%,50%,0.18) 0px, transparent 55%), radial-gradient(at 20% 80%, hsla(200,100%,60%,0.12) 0px, transparent 50%)",
    accent: "text-emerald-400",
    progress: "from-emerald-500 to-cyan-500",
    glow: "emerald",
    iconBg: "bg-emerald-500/15 border-emerald-500/20",
  },
  {
    mesh: "radial-gradient(at 80% 20%, hsla(38,100%,60%,0.18) 0px, transparent 55%), radial-gradient(at 20% 80%, hsla(20,100%,60%,0.12) 0px, transparent 50%)",
    accent: "text-amber-400",
    progress: "from-amber-500 to-orange-500",
    glow: "amber",
    iconBg: "bg-amber-500/15 border-amber-500/20",
  },
  {
    mesh: "radial-gradient(at 20% 70%, hsla(340,100%,60%,0.18) 0px, transparent 55%), radial-gradient(at 80% 20%, hsla(290,100%,60%,0.12) 0px, transparent 50%)",
    accent: "text-rose-400",
    progress: "from-rose-500 to-pink-500",
    glow: "rose",
    iconBg: "bg-rose-500/15 border-rose-500/20",
  },
];

export function CourseCard({ course }: CourseCardProps) {
  // Deterministic theme based on course index via id hash
  const themeIdx =
    course.id
      .split("")
      .reduce((acc, c) => acc + c.charCodeAt(0), 0) % CARD_THEMES.length;
  const theme = CARD_THEMES[themeIdx];

  return (
    <BentoTile glowColor={theme.glow} className="h-full min-h-[160px]">
      {/* Mesh */}
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: theme.mesh }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-10 flex flex-col gap-3 p-5 h-full">
        {/* Icon + title row */}
        <div className="flex items-start gap-3">
          <div
            className={`
              shrink-0 w-9 h-9 rounded-xl
              flex items-center justify-center
              border ${theme.iconBg}
            `}
          >
            <DynamicIcon name={course.icon_name} size={16} className={theme.accent} />
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className="text-sm font-semibold text-slate-100 leading-tight line-clamp-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {course.title}
            </h3>
          </div>

          <button className="shrink-0 text-slate-600 hover:text-slate-400 transition-colors mt-0.5">
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Progress */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-600">Progress</span>
            <span className={`text-xs font-semibold ${theme.accent}`}>
              {course.progress}%
            </span>
          </div>
          <ProgressBar value={course.progress} color={theme.progress} />
        </div>
      </div>
    </BentoTile>
  );
}
