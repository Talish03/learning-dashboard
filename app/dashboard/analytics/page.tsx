"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Clock, Target, Award } from "lucide-react";

export default function AnalyticsPage() {
  const stats = [
    { label: "Total Hours", value: "142.5", delta: "+12.3h", icon: Clock, accent: "blue" },
    { label: "Avg Daily Study", value: "2.5h", delta: "+0.5h", icon: TrendingUp, accent: "emerald" },
    { label: "Courses Completed", value: "8", delta: "+1", icon: Award, accent: "violet" },
    { label: "Current Streak", value: "12 days", delta: "Personal best", icon: Target, accent: "amber" },
  ];

  return (
    <section className="min-h-full py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 size={28} className="text-emerald-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-display">Analytics</h1>
          </div>
          <p className="text-slate-400">Track your learning performance and progress</p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const accentColors = {
              blue: "text-blue-400 bg-blue-500/15 border-blue-500/30",
              emerald: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
              violet: "text-violet-400 bg-violet-500/15 border-violet-500/30",
              amber: "text-amber-400 bg-amber-500/15 border-amber-500/30",
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${accentColors[stat.accent as keyof typeof accentColors]}`}>
                    <Icon size={18} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-100 mb-1 font-display">{stat.value}</p>
                <p className="text-xs text-emerald-400 font-medium">{stat.delta}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Charts Section */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6"
          >
            <h3 className="text-lg font-semibold text-slate-100 mb-6 font-display">Weekly Study Time</h3>
            <div className="flex items-end gap-3 h-40">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className={`w-full rounded-t-lg bg-gradient-to-t ${
                    idx === 2 ? "from-blue-500 to-blue-400 h-32" :
                    idx === 4 ? "from-violet-500 to-violet-400 h-28" :
                    idx === 6 ? "from-emerald-500 to-emerald-400 h-24" :
                    "from-slate-600 to-slate-500 h-16"
                  }`} />
                  <span className="text-xs text-slate-500 font-medium">{day}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6"
          >
            <h3 className="text-lg font-semibold text-slate-100 mb-6 font-display">Course Progress</h3>
            <div className="space-y-4">
              {[
                { name: "React Patterns", progress: 75, color: "from-blue-500 to-blue-400" },
                { name: "ML Fundamentals", progress: 42, color: "from-violet-500 to-violet-400" },
                { name: "System Design", progress: 88, color: "from-emerald-500 to-emerald-400" },
              ].map((course, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-300">{course.name}</span>
                    <span className="text-sm font-semibold text-slate-400">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${course.color} rounded-full`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
