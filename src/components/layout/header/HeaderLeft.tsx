import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLeft() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/about"
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
      >
        <Image src="/assets/icons/info.png" alt="Giới thiệu" width={20} height={20} />
        <span>Giới thiệu</span>
      </Link>
      <Link
        href="/huong-dan-mua-hang"
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
      >
        <Image src="/assets/icons/basket.png" alt="Hướng dẫn mua" width={20} height={20} />
        <span>Hướng dẫn mua</span>
      </Link>
      <Link
        href="/blog"
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
      >
        <Image src="/assets/icons/blog.png" alt="Blog tin tức" width={20} height={20} />
        <span>Blog tin tức</span>
      </Link>
    </div>
  );
}
