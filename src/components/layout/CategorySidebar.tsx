const categories = [
  "AI Công cụ AI",
  "Học tập",
  "Làm việc",
  "Giải trí",
  "VPN",
  "Lưu trữ",
  "Window – Office",
  "Anti Virus",
  "Phần mềm khác",
];

export function CategorySidebar() {
  return (
    <aside className="rounded-2xl bg-white shadow-sm">
      <div className="border-b px-4 py-3 text-sm font-semibold text-slate-900">
        ☰ Tất cả danh mục
      </div>
      <nav className="space-y-1 px-2 py-3 text-[13px]">
        {categories.map((item) => (
          <button
            key={item}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
          >
            <span className="text-slate-400">•</span>
            <span>{item}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

