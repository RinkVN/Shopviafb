'use client';

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import HeaderRight from '@/components/layout/header/HeaderRight';
import HeaderLeft from '@/components/layout/header/HeaderLeft';
import HeaderTop from './HeaderTop';

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
          <HeaderTop
            onToggleSidebar={
              onToggleSidebar ||
              (() => {
                return null;
              })
            }
          />
          {/* Bottom Navigation Bar */}
          <div className="flex items-center justify-between border-t border-slate-100 py-2">
            {/* Navigation Links */}
            <nav className="hidden w-full flex-1 items-center justify-between md:flex">
              {/* LEFT */}
              <HeaderLeft />

              {/* RIGHT */}
              <HeaderRight />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
