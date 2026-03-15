export default function LoadingSkeleton() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-3/4 rounded-xl bg-grey-100" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded-lg bg-grey-100" />
          <div className="h-4 w-full rounded-lg bg-grey-100" />
          <div className="h-4 w-5/6 rounded-lg bg-grey-100" />
        </div>
        <div className="h-48 w-full rounded-2xl bg-grey-100" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded-lg bg-grey-100" />
          <div className="h-4 w-4/5 rounded-lg bg-grey-100" />
          <div className="h-4 w-full rounded-lg bg-grey-100" />
        </div>
      </div>
    </div>
  );
}
