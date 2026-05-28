"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  value: number; // 0–100
  color?: string; // Tailwind gradient classes
  height?: number;
}

export function ProgressBar({
  value,
  color = "from-blue-500 to-violet-500",
  height = 4,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div
      ref={ref}
      className="w-full bg-white/[0.06] rounded-full overflow-hidden"
      style={{ height }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: inView ? `${value}%` : "0%" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.34, 1.2, 0.64, 1] }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        style={{
          boxShadow: `0 0 8px rgba(99, 102, 241, 0.4)`,
        }}
      />
    </div>
  );
}
