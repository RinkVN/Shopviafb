import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-sky-50/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-xs font-semibold text-white shadow-lg shadow-blue-500/40">
              K
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-slate-900">
                Khotai<span className="text-blue-600">khoan</span>
              </p>
              <p className="text-[11px] text-slate-500">
                Mọi loại tài khoản dịch vụ số
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex w-full max-w-xl items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
            <span className="text-[13px] text-slate-400">🔍</span>
            <Input
              placeholder="Tìm kiếm sản phẩm, tài khoản, phần mềm..."
              className="h-8 border-none bg-transparent px-0 text-[12px] shadow-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
          <Link href="/blog" className="hidden md:inline text-[12px]">
            Blog tin tức
          </Link>
          <Link href="/(auth)/login">
            <Button variant="outline" size="sm" className="rounded-full">
              Đăng nhập
            </Button>
          </Link>
          <Link href="/cart">
            <Button size="sm" className="gap-1 rounded-full">
              <span>Giỏ hàng</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-blue-600">
                0
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

