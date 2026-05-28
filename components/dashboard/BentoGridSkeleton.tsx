export function BentoGridSkeleton() {
  return (
    <div className="grid gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto">
      {/* Hero skeleton */}
      <div className="lg:col-span-8">
        <SkeletonTile className="min-h-[200px]" />
      </div>

      {/* Stat skeleton */}
      <div className="lg:col-span-4">
        <SkeletonTile className="min-h-[120px]" />
      </div>

      {/* 4 course card skeletons */}
      {[...Array(4)].map((_, i) => (
        <div key={i} className="md:col-span-1 lg:col-span-6">
          <SkeletonTile className="min-h-[160px]">
            <div className="flex gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl skeleton-shimmer bg-white/[0.06]" />
              <div className="flex-1">
                <div className="h-3 rounded-md skeleton-shimmer bg-white/[0.06] w-3/4 mb-2" />
                <div className="h-3 rounded-md skeleton-shimmer bg-white/[0.06] w-1/2" />
              </div>
            </div>
            <div className="mt-auto">
              <div className="h-2 rounded-full skeleton-shimmer bg-white/[0.06] w-full" />
            </div>
          </SkeletonTile>
        </div>
      ))}

      {/* Activity skeleton */}
      <div className="md:col-span-2 lg:col-span-8">
        <SkeletonTile className="min-h-[180px]">
          <div className="flex gap-[3px] flex-wrap mt-4">
            {[...Array(18 * 7)].map((_, i) => (
              <div
                key={i}
                className="w-[11px] h-[11px] rounded-[2px] skeleton-shimmer bg-white/[0.04]"
              />
            ))}
          </div>
        </SkeletonTile>
      </div>

      {/* Stat skeleton 2 */}
      <div className="lg:col-span-4">
        <SkeletonTile className="min-h-[120px]" />
      </div>
    </div>
  );
}

function SkeletonTile({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden
        bg-[#0e1117]
        border border-white/[0.05]
        p-5
        ${className}
      `}
    >
      {children ?? (
        <>
          <div className="h-3 rounded-md skeleton-shimmer bg-white/[0.06] w-1/3 mb-3" />
          <div className="h-6 rounded-md skeleton-shimmer bg-white/[0.06] w-2/3" />
        </>
      )}
    </div>
  );
}
