"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "courses", label: "My Courses", icon: BookOpen, href: "/dashboard/courses" },
  { id: "analytics", label: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { id: "achievements", label: "Achievements", icon: Trophy, href: "/dashboard/achievements" },
] as const;

const BOTTOM_ITEMS = [
  { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ─── Desktop Sidebar ──────────────────────────────────── */}
      <motion.nav
        animate={{ width: collapsed ? 72 : 300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="
          hidden md:flex flex-col relative shrink-0
          bg-[#0e1117]/80 backdrop-blur-sm border-r border-white/[0.08]
          overflow-hidden z-20
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-20 border-b border-white/[0.08] shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
            <Sparkles size={18} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15 }}
                className="font-display font-700 text-base text-slate-100 tracking-tight whitespace-nowrap"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                LearnOS
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Nav items */}
        <div className="flex-1 flex flex-col gap-1.5 px-3 py-6 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link key={item.id} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex items-center gap-3 px-3.5 py-3 rounded-lg cursor-pointer group"
                >
                  {/* Active background with layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-bg"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/15 border border-blue-400/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <item.icon
                    size={20}
                    className={`relative z-10 shrink-0 transition-colors ${
                      isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  />

                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className={`relative z-10 text-sm font-500 whitespace-nowrap transition-colors ${
                          isActive ? "text-slate-100" : "text-slate-300 group-hover:text-slate-200"
                        }`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Bottom items */}
        <div className="flex flex-col gap-1.5 px-3 pb-6 border-t border-white/[0.08] pt-6">
          {BOTTOM_ITEMS.map((item) => (
            <Link key={item.id} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-slate-400 hover:text-slate-300 transition-colors group"
              >
                <item.icon size={20} className="shrink-0 group-hover:text-slate-200 transition-colors" />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="text-sm font-500 whitespace-nowrap group-hover:text-slate-200 transition-colors"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}

          {/* Divider */}
          <div className="h-px bg-white/[0.08] my-2" />

          {/* Avatar row */}
          <div className="flex items-center gap-3 px-3.5 py-3 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 shrink-0 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-emerald-500/20">
              A
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-xs font-semibold text-slate-100 truncate">Alex Chen</p>
                  <p className="text-[11px] text-slate-500 truncate">Pro Plan</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Collapse toggle */}
        <motion.button
          onClick={() => setCollapsed((c) => !c)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="
            absolute top-24 right-3 z-30
            w-6 h-6 rounded-full
            bg-[#1a1f2e] border border-white/15 hover:border-white/30
            flex items-center justify-center
            text-slate-400 hover:text-slate-200
            transition-all shadow-md hover:shadow-lg
          "
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </motion.button>
      </motion.nav>

      {/* ─── Mobile Bottom Nav ────────────────────────────────── */}
      <nav className="
        md:hidden fixed bottom-0 left-0 right-0 z-40
        bg-[#0e1117]/95 backdrop-blur-xl
        border-t border-white/[0.08]
        flex items-center justify-around
        px-2 py-3 h-20
        shadow-2xl
      ">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.id} href={item.href} className="flex flex-col items-center gap-1 flex-1">
              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative w-full flex justify-center"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute -inset-2 rounded-xl bg-blue-500/20 border border-blue-400/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <item.icon
                  size={22}
                  className={`relative z-10 transition-colors ${
                    isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-300"
                  }`}
                />
              </motion.div>
              <span className={`text-[10px] font-semibold transition-colors ${
                isActive ? "text-blue-400" : "text-slate-400"
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
