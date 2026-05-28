import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-[#080a0f] to-[#0e1117]">
      {/* Desktop/Tablet sidebar */}
      <Sidebar />

      {/* Main scrollable content */}
      <main
        className="
          flex-1 overflow-y-auto overflow-x-hidden
          pb-24 md:pb-0
          scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent
        "
      >
        {children}
      </main>
    </div>
  );
}
