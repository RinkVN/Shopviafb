export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} KhotaiKhoan - Shop tài khoản số.</p>
        <p>Hỗ trợ nhanh qua Zalo: 0865 890 208</p>
      </div>
    </footer>
  );
}

