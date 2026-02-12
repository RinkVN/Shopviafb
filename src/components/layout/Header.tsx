'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Input } from '@/components/ui/input';

type HeaderProps = {
  onToggleSidebar?: () => void;
};

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm md:pl-14">
        <div className="mx-auto max-w-7xl px-4">
          {/* Main Header Row */}
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
                <div className="relative h-12 w-48">
                  <span className="text-xl font-bold text-blue-600">
                    Khotai<span className="text-slate-900">khoan</span>
                  </span>
                  <p className="text-[11px] text-slate-600">Phần mềm bản quyền giá tốt</p>
                </div>
              </Link>
            </div>

            {/* Search Bar - Center */}
            <div className="hidden flex-1 items-center justify-center md:flex">
              <form className="flex w-full max-w-2xl items-center">
                <div className="relative flex w-full items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
                  <svg
                    className="mr-2 h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
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
                href="http://zalo.me/0865890208"
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

          {/* Bottom Navigation Bar */}
          <div className="flex items-center justify-between border-t border-slate-100 py-2">

            {/* Navigation Links */}
            <nav className="hidden w-full flex-1 items-center justify-between md:flex">
              {/* LEFT */}
              <div className="flex items-center gap-2">
                <Link
                  href="/gioi-thieu"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9   9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                  </svg>
                  <span>Giới thiệu</span>
                </Link>
                <Link
                  href="/huong-dan-mua-hang"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Hướng dẫn mua</span>
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 00-2 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2V5zM15 11a1 1 0 100 2h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414A1 1 0 0016.586 11H15z" />
                  </svg>
                  <span>Blog tin tức</span>
                </Link>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2">
                {/* User Account */}
                <div className="flex items-center gap-2">
                  <Link
                    href="/(auth)/login"
                    className="hidden items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 md:flex"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-xs">Login / Register</span>
                  </Link>
                </div>

                {/* Wishlist */}
                <div className="flex items-center gap-2">
                  <Link
                    href="/wishlist"
                    className="relative flex items-center rounded-lg px-2 py-1.5 text-slate-700 hover:bg-slate-100"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                      0
                    </span>
                  </Link>
                </div>

                {/* Cart */}
                <div className="flex items-center gap-2">
                  <Link
                    href="/cart"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="hidden md:inline">0 items</span>
                    <span className="font-semibold">0₫</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
