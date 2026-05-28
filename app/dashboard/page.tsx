import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { BentoGridSkeleton } from "@/components/dashboard/BentoGridSkeleton";
import { Course } from "@/types";

async function fetchCourses(): Promise<Course[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase error:", error.message);
    // Return fallback data so the UI still renders
    return FALLBACK_COURSES;
  }

  return (data as Course[]) ?? FALLBACK_COURSES;
}

// Shown if DB is unreachable or returns nothing
const FALLBACK_COURSES: Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "Code2",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Machine Learning Fundamentals",
    progress: 42,
    icon_name: "BrainCircuit",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "System Design at Scale",
    progress: 88,
    icon_name: "Database",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Web Security & Cryptography",
    progress: 30,
    icon_name: "Shield",
    created_at: new Date().toISOString(),
  },
];

// Async Server Component that triggers the Suspense boundary above it
async function DashboardContent() {
  const courses = await fetchCourses();
  return <BentoGrid courses={courses} />;
}

export default function DashboardPage() {
  return (
    <section className="min-h-full py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-display mb-2">Welcome back, Alex</h1>
          <p className="text-slate-400">Track your learning progress and explore new courses</p>
        </div>

        {/* Content */}
        <Suspense fallback={<BentoGridSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <DashboardContent />
        </Suspense>
      </div>
    </section>
  );
}
