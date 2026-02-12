import Link from 'next/link';
import { Heart, ShoppingCart, UserRound } from 'lucide-react';

export default function HeaderRight() {
  return (
    <div className="flex items-center gap-2">
      {/* Wishlist */}
      <div className="flex items-center gap-2">
        <Link
          href="/wishlist"
          className="relative flex items-center rounded-lg px-3 py-1.5 text-slate-700 hover:bg-slate-100"
        >
          <Heart />
          <span className="absolute right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            0
          </span>
        </Link>
      </div>

      {/* Cart */}
      <div className="flex items-center gap-2">
        <Link
          href="/cart"
          className="relative flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
        >
          <ShoppingCart />
          <span className="absolute right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            0
          </span>
        </Link>
      </div>

      {/* User Account */}
      <div className="flex items-center gap-2">
        <Link
          href="/(auth)/login"
          className="hidden items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 md:flex"
        >
          <UserRound />
          <span className="text-sm font-medium">Đăng nhập</span>
        </Link>
      </div>
    </div>
  );
}
