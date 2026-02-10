import type { ReactNode } from "react";
import "../globals.css";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="hidden w-60 flex-col border-r border-slate-200 bg-white p-4 text-sm text-slate-700 md:flex">
        <p className="mb-4 text-xs font-semibold text-slate-400">
          Quản trị hệ thống
        </p>
        <nav className="space-y-1">
          <button className="flex w-full items-center justify-between rounded-lg bg-slate-100 px-3 py-2 text-left font-medium text-slate-900">
            Tổng quan
          </button>
          <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-slate-50">
            Đơn hàng
          </button>
          <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-slate-50">
            Sản phẩm
          </button>
          <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-slate-50">
            Người dùng
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

