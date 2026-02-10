import Image from "next/image";
import Link from "next/link";
import { productsMock } from "@/features/products/mock";
import { CategorySidebar } from "@/components/layout/CategorySidebar";
import { ProductCard } from "@/features/products/components/ProductCard";
import { GlassCard } from "@/components/aceternity/glass-card";
import { Badge } from "@/components/ui/badge";

export default function HomePublicPage() {
  return (
    <div className="space-y-6">
      {/* Hero banners */}
      <section className="grid gap-4 md:grid-cols-[2fr,1.2fr]">
        <GlassCard glowColor="rgba(59,130,246,0.5)" className="h-52 bg-[radial-gradient(circle_at_top,_#0f172a,_#1d4ed8_45%,_#38bdf8_90%)] text-white">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-[10px] text-sky-50 backdrop-blur">
                Ưu đãi khủng - Lì xì Tết
              </Badge>
              <h1 className="text-[20px] font-semibold leading-snug tracking-tight">
                Tài khoản AI, Streaming, phần mềm{" "}
                <span className="text-sky-300">giá tốt nhất</span>
              </h1>
              <p className="mt-1 max-w-md text-[12px] text-sky-100/90">
                Nâng cấp trải nghiệm học tập, làm việc và giải trí với kho dịch
                vụ bản quyền phong phú.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-black/20 px-3 py-1">
                Bảo hành trọn thời gian dùng
              </span>
              <span className="rounded-full bg-black/20 px-3 py-1">
                Giao tự động 24/7
              </span>
              <span className="rounded-full bg-black/20 px-3 py-1">
                Hỗ trợ kỹ thuật tận tâm
              </span>
            </div>
          </div>
        </GlassCard>

        <div className="grid h-52 gap-4">
          <GlassCard glowColor="rgba(16,185,129,0.5)" className="flex flex-1 items-center justify-between bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                Flash Sale Tết 2026
              </p>
              <p className="text-[12px] text-emerald-50">
                Giảm đến 50% cho tài khoản AI & streaming hot.
              </p>
            </div>
            <div className="flex gap-1 text-[11px]">
              {["17", "01", "16", "09"].map((v, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 flex-col items-center justify-center rounded-md bg-white/15 text-[10px] font-semibold shadow-sm"
                >
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard glowColor="rgba(15,23,42,0.6)" className="flex flex-1 items-center justify-between bg-[#020617] text-white">
            <div>
              <p className="text-[12px] font-semibold">
                Nâng cấp YouTube & Spotify Premium
              </p>
              <p className="text-[11px] text-slate-300">
                Không quảng cáo, nghe nhạc/video mọi nơi.
              </p>
            </div>
            <button className="rounded-full bg-blue-500 px-3 py-1 text-[11px] font-semibold">
              Xem ngay
            </button>
          </GlassCard>
        </div>
      </section>

      {/* Category + product list */}
      <section className="grid gap-4 md:grid-cols-[220px,1fr]">
        <CategorySidebar />

        {/* Products section */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-900">
              Sản phẩm nổi bật
            </h2>
            <Link
              href="/products"
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              Xem tất cả &rarr;
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productsMock.slice(0, 8).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

