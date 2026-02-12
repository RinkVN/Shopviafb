import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-slate-500">
        {/* Logo + name */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
            <Image src="/assets/images/logo.jpg" alt="Shop BNH" 
            width={50} height={50} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">
                Shop<span className="text-[var(--color-red)]">BNH</span>
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-900">
            <a href="#" className="hover:text-slate-900">
              Sản phẩm
            </a>
            <a href="#" className="hover:text-slate-900">
              Giới thiệu
            </a>
            <a href="#" className="hover:text-slate-900">
              Hướng dẫn mua hàng
            </a>
            <a href="#" className="hover:text-slate-900">
              Liên hệ
            </a>
            <a href="#" className="hover:text-slate-900">
              Điều khoản và điều kiện
            </a>
            <a href="#" className="hover:text-slate-900">
              Chính sách bảo mật
            </a>
            
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-dotted border-slate-200" />

        {/* Bottom row */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row">
          <p>© Shop BNH {year}</p>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" aria-label="Twitter" className="hover:text-slate-700">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-700">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-slate-700">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-slate-700">
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-slate-700"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
