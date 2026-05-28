"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <section className="min-h-full p-4 md:p-6 lg:p-8 flex items-center justify-center">
      <div className="
        max-w-md w-full rounded-2xl
        bg-[#0e1117] border border-rose-500/20
        p-8 text-center
        shadow-[0_0_30px_-8px_rgba(244,63,94,0.2)]
      ">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle size={20} className="text-rose-400" />
        </div>
        <h2 className="text-lg font-bold text-text-primary mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
          Connection Error
        </h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          We couldn't connect to the database. Your fallback data is shown instead.
          Check your Supabase environment variables.
        </p>
        <button
          onClick={reset}
          className="
            inline-flex items-center gap-2 px-4 py-2 rounded-xl
            bg-rose-500/10 hover:bg-rose-500/20
            border border-rose-500/20
            text-rose-400 text-sm font-medium
            transition-colors
          "
        >
          <RefreshCw size={14} />
          Try again
        </button>
      </div>
    </section>
  );
}
