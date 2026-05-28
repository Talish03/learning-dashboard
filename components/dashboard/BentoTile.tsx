"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "violet" | "emerald" | "amber" | "rose" | "cyan";
  noHover?: boolean;
}

const glowMap = {
  blue: "hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.5),0_4px_32px_rgba(0,0,0,0.6)] hover:border-blue-500/40",
  violet: "hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.5),0_4px_32px_rgba(0,0,0,0.6)] hover:border-violet-500/40",
  emerald: "hover:shadow-[0_0_40px_-8px_rgba(16,185,129,0.5),0_4px_32px_rgba(0,0,0,0.6)] hover:border-emerald-500/40",
  amber: "hover:shadow-[0_0_40px_-8px_rgba(245,158,11,0.5),0_4px_32px_rgba(0,0,0,0.6)] hover:border-amber-500/40",
  rose: "hover:shadow-[0_0_40px_-8px_rgba(244,63,94,0.5),0_4px_32px_rgba(0,0,0,0.6)] hover:border-rose-500/40",
  cyan: "hover:shadow-[0_0_40px_-8px_rgba(6,182,212,0.5),0_4px_32px_rgba(0,0,0,0.6)] hover:border-cyan-500/40",
};

export function BentoTile({
  children,
  className = "",
  glowColor = "blue",
  noHover = false,
}: BentoTileProps) {
  return (
    <motion.article
      whileHover={noHover ? {} : { scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        relative rounded-2xl overflow-hidden
        bg-gradient-to-br from-[#0e1117] to-[#0a0d12]
        border border-white/[0.08]
        shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.6)]
        transition-[border-color,box-shadow] duration-300 ease-out
        ${noHover ? "" : glowMap[glowColor]}
        ${className}
      `}
    >
      {children}
    </motion.article>
  );
}
