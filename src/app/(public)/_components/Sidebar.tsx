import type { ComponentType, Dispatch, SVGProps, SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  BadgeCheck,
  Brain,
  Grid2X2,
  HardDrive,
  Headphones,
  Laptop2,
  Menu,
  ShieldCheck,
  ShieldHalf,
  GraduationCap,
} from 'lucide-react';

type Category = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const categories: Category[] = [
  { label: 'Công cụ AI', href: '/#ai-tools', icon: Brain },
  { label: 'Học tập', href: '/#learning', icon: GraduationCap },
  { label: 'Làm việc', href: '/#work', icon: Laptop2 },
  { label: 'Giải trí', href: '/#entertainment', icon: Headphones },
  { label: 'VPN', href: '/#vpn', icon: ShieldCheck },
  { label: 'Lưu trữ', href: '/#storage', icon: HardDrive },
  { label: 'Windows - Office', href: '/#office', icon: Grid2X2 },
  { label: 'Anti Virus', href: '/#antivirus', icon: ShieldHalf },
  { label: 'Phần mềm khác', href: '/#others', icon: BadgeCheck },
];

type SidebarProps = {
  isMobile: boolean;
  isExpanded: boolean;
  setIsMobileOpen: Dispatch<SetStateAction<boolean>>;
};

export function Sidebar({ isMobile, isExpanded, setIsMobileOpen }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-50 flex group">
      <div
        className={cn(
          'flex h-screen w-14 flex-col items-center gap-4 rounded-r-3xl bg-white shadow-sm ring-1 ring-slate-200',
          isMobile && 'hidden',
        )}
      >
        <button
          type="button"
          onClick={() => isMobile && setIsMobileOpen((prev) => !prev)}
          className="mt-4 flex size-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm"
        >
          <Menu className="size-5 text-black" />
        </button>

        <div className="mt-2 flex flex-1 flex-col items-center gap-3 pb-4">
          {categories.map((cat) => (
            <span
              key={cat.label}
              className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200"
            >
              <cat.icon className="size-4" />
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'pointer-events-none absolute left-0 top-0 h-screen w-72 -translate-x-full rounded-r-3xl bg-white shadow-xl ring-1 ring-slate-200 transition-all duration-300',
          !isMobile && 'group-hover:pointer-events-auto group-hover:translate-x-0',
          isExpanded && 'pointer-events-auto translate-x-0',
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between rounded-t-3xl bg-blue-600 px-4 py-4 text-white">
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
                <Menu className="size-5" />
              </span>
              <span>Tất cả danh mục</span>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-slate-800 transition-colors hover:bg-slate-100"
                onClick={() => isMobile && setIsMobileOpen(false)}
              >
                <span className="flex size-9 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <cat.icon className="size-4" />
                </span>
                <span className="truncate">{cat.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
