import { BentoGridSkeleton } from "@/components/dashboard/BentoGridSkeleton";

export default function Loading() {
  return (
    <section className="min-h-full p-4 md:p-6 lg:p-8">
      <BentoGridSkeleton />
    </section>
  );
}
