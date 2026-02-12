'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';


import '../globals.css';
import { Header } from '@/components/layout/header/Header';
import { Footer } from '@/components/layout/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Sidebar } from './_components/Sidebar';


export default function PublicLayout({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isExpanded = isMobile && isMobileOpen;

  return (
    <div className="min-h-screen bg-slate-100">
      <Header
        onToggleSidebar={() => {
          if (!isMobile) return;
          setIsMobileOpen((prev) => !prev);
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="relative flex gap-4">
          <Sidebar
            isMobile={isMobile}
            isExpanded={isExpanded}
            setIsMobileOpen={setIsMobileOpen}
          />

          <div className="relative flex-1">
            <button
              type="button"
              onClick={() => isMobile && setIsMobileOpen(false)}
              className={cn(
                'pointer-events-none fixed inset-0 z-30 bg-black/30 opacity-0 transition-opacity duration-300',
                isExpanded && 'pointer-events-auto opacity-100',
              )}
              aria-hidden="true"
            />

            <main className="relative z-10">{children}</main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
