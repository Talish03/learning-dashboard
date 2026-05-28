"use client";

import { motion } from "framer-motion";
import { Settings, Bell, Lock, User, Palette, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <section className="min-h-full py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Settings size={28} className="text-violet-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-display">Settings</h1>
          </div>
          <p className="text-slate-400">Manage your account and preferences</p>
        </div>

        {/* Settings Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Account Settings */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <div className="flex items-center gap-3 mb-6">
              <User size={20} className="text-blue-400" />
              <h2 className="text-xl font-semibold text-slate-100 font-display">Account</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-2">Email</label>
                <input
                  type="email"
                  value="alex.chen@example.com"
                  readOnly
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-white/10 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-2">Username</label>
                <input
                  type="text"
                  value="alexchen"
                  readOnly
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-white/10 rounded-lg text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-2">Plan</label>
                <input
                  type="text"
                  value="Pro Plan"
                  readOnly
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-blue-500/30 rounded-lg text-blue-300 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell size={20} className="text-emerald-400" />
              <h2 className="text-xl font-semibold text-slate-100 font-display">Notifications</h2>
            </div>

            <div className="space-y-4">
              {[
                { label: "Course reminders", enabled: true },
                { label: "Achievement notifications", enabled: true },
                { label: "Weekly digest", enabled: false },
                { label: "Email updates", enabled: true },
              ].map((notif, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{notif.label}</span>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notif.enabled ? "bg-emerald-600" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notif.enabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette size={20} className="text-violet-400" />
              <h2 className="text-xl font-semibold text-slate-100 font-display">Appearance</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-3">Theme</label>
                <div className="flex gap-3">
                  {["Dark", "Light", "Auto"].map((theme) => (
                    <button
                      key={theme}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        theme === "Dark"
                          ? "bg-slate-700 text-slate-100 border border-slate-600"
                          : "bg-slate-900/50 text-slate-400 border border-white/10 hover:border-white/20"
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1117] to-[#0a0d12] border border-white/[0.08] p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock size={20} className="text-rose-400" />
              <h2 className="text-xl font-semibold text-slate-100 font-display">Security</h2>
            </div>

            <div className="space-y-4">
              <button className="w-full px-4 py-2.5 bg-slate-900/50 border border-white/10 rounded-lg text-slate-300 hover:border-white/20 transition-colors text-sm font-medium">
                Change Password
              </button>
              <button className="w-full px-4 py-2.5 bg-slate-900/50 border border-white/10 rounded-lg text-slate-300 hover:border-white/20 transition-colors text-sm font-medium">
                Two-Factor Authentication
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-rose-900/20 to-red-900/10 border border-rose-500/30 p-6">
            <div className="flex items-center gap-3 mb-6">
              <LogOut size={20} className="text-rose-400" />
              <h2 className="text-xl font-semibold text-slate-100 font-display">Danger Zone</h2>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-2.5 bg-rose-900/20 border border-rose-500/30 rounded-lg text-rose-300 hover:border-rose-500/50 hover:bg-rose-900/30 transition-all text-sm font-medium">
                Sign Out
              </button>
              <button className="w-full px-4 py-2.5 bg-rose-900/20 border border-rose-500/30 rounded-lg text-rose-300 hover:border-rose-500/50 hover:bg-rose-900/30 transition-all text-sm font-medium">
                Delete Account
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
