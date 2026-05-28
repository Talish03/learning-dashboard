"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, Filter } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    { id: 1, title: "Advanced React Patterns", progress: 75, category: "Frontend", level: "Advanced" },
    { id: 2, title: "Machine Learning Fundamentals", progress: 42, category: "AI/ML", level: "Intermediate" },
    { id: 3, title: "System Design at Scale", progress: 88, category: "Backend", level: "Advanced" },
    { id: 4, title: "Web Security & Cryptography", progress: 30, category: "Security", level: "Intermediate" },
  ];

  return (
    <section className="min-h-full py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={28} className="text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-display">My Courses</h1>
          </div>
          <p className="text-slate-400">Manage and track your learning courses</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0e1117]/50 border border-white/10 rounded-lg text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0e1117]/50 border border-white/10 rounded-lg text-slate-300 hover:border-white/20 transition-colors">
            <Filter size={18} />
            Filter
          </button>
        </div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.4)]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 font-display">
                      {course.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 text-xs font-medium bg-blue-500/15 text-blue-300 rounded-full border border-blue-500/30">
                        {course.category}
                      </span>
                      <span className="px-2.5 py-1 text-xs font-medium bg-violet-500/15 text-violet-300 rounded-full border border-violet-500/30">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-600">Progress</span>
                    <span className="text-sm font-semibold text-blue-400">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
