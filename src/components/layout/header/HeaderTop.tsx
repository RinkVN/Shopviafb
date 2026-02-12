import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HeaderTop({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      {/* Logo + mobile sidebar trigger */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button (sidebar trigger) */}
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm md:hidden"
          aria-label="Mở danh mục"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-55 flex items-center gap-2">
            <Image
              src="/assets/images/logo.jpg"
              alt="Shop BNH"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">
                Shop<span className="text-[var(--color-red)]">BNH</span>
              </span>
              <p className="text-[11px] text-slate-600">Phần mềm bản quyền giá tốt</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Search Bar - Center */}
      <div className="hidden flex-1 items-center justify-center md:flex">
        <form className="flex w-full max-w-2xl items-center">
          <div
            className="relative flex w-full items-center rounded-full border border-slate-200 
            bg-slate-50 px-4 shadow-sm gap-2"
          >
            <Search />
            <Input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="h-8 border-0 bg-transparent px-0 text-sm shadow-none focus-visible:ring-0"
            />
            <button
              type="submit"
              className="ml-2 rounded-full bg-blue-600 px-4 py-1 text-xs font-medium text-white hover:bg-blue-700"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Zalo Contact */}
        <a
          href="http://zalo.me/0329846666"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
            <img src="/assets/icons/Icon_of_Zalo.svg" alt="Zalo" width={30} height={30} />
          </div>
          <span className="hidden font-semibold md:inline">032 984 6666</span>
        </a>
      </div>
    </div>
  );
}
