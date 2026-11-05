export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8"
    >
      <span className="sr-only">Loading…</span>

      <div className="flex flex-col gap-3">
        <div className="h-5 w-28 animate-pulse rounded-full bg-muted" />
        <div className="h-9 w-2/3 max-w-md animate-pulse rounded-lg bg-muted" />
        <div className="h-4 w-full max-w-lg animate-pulse rounded-full bg-muted" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border bg-card shadow-sm"
          >
            <div className="aspect-[4/3] w-full animate-pulse bg-muted" />
            <div className="flex flex-col gap-3 p-5">
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
