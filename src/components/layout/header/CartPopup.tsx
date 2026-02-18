"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCartStore, type CartItem } from "@/stores/cart-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HOVER_DELAY_MS = 150;

export function CartPopup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const clearCloseDelay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseDelay();
    timeoutRef.current = setTimeout(() => setOpen(false), HOVER_DELAY_MS);
  }, [clearCloseDelay]);

  const handleOpen = useCallback(() => {
    clearCloseDelay();
    setOpen(true);
  }, [clearCloseDelay]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      {children}
      {open && (
        <div
          className="absolute right-0 top-full z-50 pt-1"
          onMouseEnter={handleOpen}
          onMouseLeave={scheduleClose}
        >
          <div className="w-[320px] rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950">
            <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Giỏ hàng ({count} {count === 1 ? "sản phẩm" : "sản phẩm"})
              </h3>
            </div>
            <div className="max-h-[280px] overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 text-center">
                  <ShoppingCart className="h-10 w-10 text-gray-300 dark:text-gray-600" />
                  <p className="text-sm text-gray-500">Chưa có sản phẩm trong giỏ</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                  {items.map((item) => (
                    <CartPopupItem key={item.id} item={item} onRemove={() => removeItem(item.id)} />
                  ))}
                </ul>
              )}
            </div>
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-3 dark:border-gray-800">
                <Link href="/cart">
                  <Button className="w-full">Xem giỏ hàng</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CartPopupItem({ item, onRemove }: { item: CartItem; onRemove: () => void }) {
  return (
    <li className="flex gap-3 px-4 py-3">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            <ShoppingCart className="h-5 w-5" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
          {item.name}
        </p>
        {(item.color || item.size) && (
          <p className="text-xs text-gray-500">
            {[item.color, item.size].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="mt-0.5 text-sm font-medium text-[var(--color-red-500)]">
          {item.price}
          {item.quantity > 1 && (
            <span className="ml-1 font-normal text-gray-500">× {item.quantity}</span>
          )}
        </p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0 text-gray-400 hover:text-red-500"
        onClick={onRemove}
        aria-label="Xóa khỏi giỏ"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
}
