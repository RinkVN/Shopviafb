export default function ProductDetailLoading() {
  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] animate-pulse">
      <div className="space-y-4 rounded-2xl bg-white p-4 shadow-sm">
        <div className="h-60 w-full rounded-2xl bg-slate-100" />
        <div className="space-y-2">
          <div className="h-3 w-32 rounded bg-slate-100" />
          <div className="h-4 w-3/4 rounded bg-slate-100" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-slate-100" />
          <div className="h-3 w-5/6 rounded bg-slate-100" />
          <div className="h-3 w-2/3 rounded bg-slate-100" />
        </div>
      </div>
      <div className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
        <div className="h-6 w-1/2 rounded bg-slate-100" />
        <div className="h-4 w-2/3 rounded bg-slate-100" />
        <div className="h-10 w-full rounded-full bg-slate-100" />
        <div className="h-16 w-full rounded-xl bg-slate-100" />
      </div>
    </div>
  );
}

