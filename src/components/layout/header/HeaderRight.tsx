"use client";

import Link from "next/link";
import { ShoppingCart, UserRound } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { CartPopup } from "./CartPopup";

export default function HeaderRight() {
  const totalCount = useCartStore((s) => s.totalCount());
  const count = totalCount;

  return (
    <div className="flex items-center gap-2">
      {/* Cart */}
      <div className="flex items-center gap-2">
        <CartPopup>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
          >
            <ShoppingCart />
            {count > 0 && (
              <span className="absolute right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
        </CartPopup>
      </div>

      {/* User Account */}
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="hidden items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 md:flex"
        >
          <UserRound />
          <span className="text-sm font-medium">Đăng nhập</span>
        </Link>
      </div>
    </div>
  );
}