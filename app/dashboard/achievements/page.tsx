"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Star, Crown, Target, Zap } from "lucide-react";

export default function AchievementsPage() {
  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first course", icon: Star, earned: true, date: "May 10, 2026" },
    { id: 2, title: "On Fire", description: "Maintain a 7-day streak", icon: Flame, earned: true, date: "May 15, 2026" },
    { id: 3, title: "Speed Learner", description: "Complete 3 courses in a month", icon: Zap, earned: true, date: "May 20, 2026" },
    { id: 4, title: "Learning Legend", description: "Complete 25 courses", icon: Crown, earned: false, progress: "8/25" },
    { id: 5, title: "Consistency Master", description: "Maintain a 30-day streak", icon: Target, earned: false, progress: "12/30" },
    { id: 6, title: "Expert Level", description: "Reach Expert level on 5 courses", icon: Trophy, earned: false, progress: "1/5" },
  ];

  return (
    <section className="min-h-full py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Trophy size={28} className="text-amber-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-display">Achievements</h1>
          </div>
          <p className="text-slate-400">Unlock badges and celebrate your learning milestones</p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8"
        >
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Total Earned</p>
            <p className="text-3xl font-bold text-amber-400 font-display">3</p>
          </div>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">In Progress</p>
            <p className="text-3xl font-bold text-blue-400 font-display">3</p>
          </div>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Completion Rate</p>
            <p className="text-3xl font-bold text-emerald-400 font-display">50%</p>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group relative rounded-xl overflow-hidden border p-6 transition-all duration-300 ${
                  achievement.earned
                    ? "bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border-amber-500/30 hover:border-amber-500/50 hover:shadow-[0_0_40px_-8px_rgba(251,191,36,0.4)]"
                    : "bg-gradient-to-br from-[#0a0d12]/50 to-[#060809]/50 border-white/[0.08] hover:border-white/15"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all ${
                      achievement.earned
                        ? "bg-gradient-to-br from-amber-500/25 to-orange-500/15 border border-amber-500/40 text-amber-400"
                        : "bg-slate-800/50 border border-slate-700 text-slate-600"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className={`text-lg font-semibold mb-1 font-display ${
                    achievement.earned ? "text-slate-100" : "text-slate-600"
                  }`}>
                    {achievement.title}
                  </h3>

                  <p className={`text-sm mb-3 ${
                    achievement.earned ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {achievement.description}
                  </p>

                  {achievement.earned ? (
                    <p className="text-xs font-medium text-amber-400">Earned on {achievement.date}</p>
                  ) : (
                    <div className="w-full">
                      <p className="text-xs font-medium text-slate-500 mb-2">{achievement.progress}</p>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                          style={{ width: `${achievement.progress ?? 0}%` }}>
                        </div>  
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
