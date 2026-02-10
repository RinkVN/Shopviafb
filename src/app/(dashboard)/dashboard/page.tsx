export default function DashboardHomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-slate-900">
        Tổng quan doanh thu
      </h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs text-slate-500">Doanh thu hôm nay</p>
          <p className="mt-2 text-xl font-semibold text-emerald-600">
            5.320.000đ
          </p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs text-slate-500">Đơn hàng mới</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">27</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-xs text-slate-500">Khách hàng mới</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">12</p>
        </div>
      </div>
    </div>
  );
}

