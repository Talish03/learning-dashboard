"use client";

import { motion } from "framer-motion";
import { Course } from "@/types";
import { HeroTile } from "./HeroTile";
import { CourseCard } from "./CourseCard";
import { ActivityTile } from "./ActivityTile";
import { StatTile } from "./StatTile";
import { Clock, Zap, Target } from "lucide-react";

interface BentoGridProps {
  courses: Course[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        grid gap-4 lg:gap-5
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-12
        auto-rows-auto
      "
    >
      {/* ── Hero tile: spans 8 cols on lg, full on md ── */}
      <motion.div variants={tileVariants} className="lg:col-span-8">
        <HeroTile />
      </motion.div>

      {/* ── Stat: hours ── */}
      <motion.div variants={tileVariants} className="lg:col-span-4">
        <StatTile
          label="Hours This Week"
          value="14.5"
          delta="+2.3h"
          positive
          icon={Clock}
          accent="blue"
        />
      </motion.div>

      {/* ── Course cards: each spans 6 cols on lg ── */}
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={tileVariants}
          className="md:col-span-1 lg:col-span-6"
        >
          <CourseCard course={course} />
        </motion.div>
      ))}

      {/* ── Activity tile: spans 8 cols ── */}
      <motion.div
        variants={tileVariants}
        className="md:col-span-2 lg:col-span-8"
      >
        <ActivityTile />
      </motion.div>

      {/* ── Stat: streak ── */}
      <motion.div variants={tileVariants} className="lg:col-span-4">
        <StatTile
          label="Current Streak"
          value="12 days"
          delta="Personal best!"
          positive
          icon={Zap}
          accent="amber"
        />
      </motion.div>
    </motion.div>
  );
}
