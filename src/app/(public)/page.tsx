'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { productsMock } from '@/features/products/mock';
import { CategorySidebar } from '@/components/layout/CategorySidebar';
import { ProductCard } from '@/features/products/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import FlashSaleTet from './_components/FlashSaleTet';
export default function HomePublicPage() {
  return (
    <div className="space-y-6">
      {/* Hero banners */}
      <section className="space-y-4 md:space-y-0 grid grid-cols-2 md:gap-4">
        {/* LEFT */}
        <div className="relative h-[280px] md:h-[460px] overflow-hidden rounded-2xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="h-full"
          >
            {[
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
            ].map((src, index) => (
              <SwiperSlide key={src}>
                <div className="relative h-[280px] md:h-[460px] w-full">
                  <Image
                    src={src}
                    alt={`Main banner ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative flex h-full flex-col justify-between p-6 text-white">
            <div>
              <Badge className="mb-3 bg-white/20 text-xs text-white backdrop-blur">
                CHỈ TỪ 79K / THÁNG
              </Badge>
              <h1 className="mb-2 text-2xl font-bold md:text-3xl">Tài khoản Netflix Premium</h1>
              <p className="text-sm text-white/90">Xem phim 4K, truyền hình không giới hạn</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90">
                Xem ngay
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4 md:h-[460px] md:grid-rows-[1fr,1fr]">
          <div className="relative h-[160px] overflow-hidden rounded-2xl md:h-auto">
            <Image src="https://picsum.photos/200/300" alt="CapCut" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative flex h-full flex-col justify-between p-5 text-white">
              <div>
                <p className="text-xs font-semibold opacity-90">CapCut Pro</p>
                <h3 className="mt-1 text-xl font-extrabold">Nâng Tầm Video</h3>
                <p className="text-sm opacity-90">Thoả Sức Sáng Tạo • CapCut Pro</p>
              </div>
              <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">
                Xem ngay
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 md:h-full">
            <div className="relative h-[160px] overflow-hidden rounded-2xl md:h-full">
              <Image
                src="https://picsum.photos/200/300"
                alt="Spotify"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="relative h-full p-4 text-white">
                <p className="text-[10px] opacity-90">Nâng cấp</p>
                <h4 className="text-xl font-bold">Spotify</h4>
                <p className="text-xs opacity-90">Đắm chìm trong Âm nhạc</p>
              </div>
            </div>

            <div className="relative h-[160px] overflow-hidden rounded-2xl md:h-full">
              <Image
                src="https://picsum.photos/200/300"
                alt="Google AI Ultra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex h-full flex-col justify-between p-4 text-white">
                <div>
                  <p className="text-[10px] opacity-90">Nâng cấp ngay</p>
                  <h4 className="text-base font-bold">Google AI Ultra</h4>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-extrabold text-yellow-300">199K</span>
                  <span className="text-[10px] opacity-80">/ tháng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <FlashSaleTet />

      {/* Category + product list */}
      <section className="grid gap-4 md:grid-cols-[220px,1fr]">
        <CategorySidebar />

        {/* Products section */}
        <div className="space-y-4">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="mb-2 flex items-center justify-center gap-2 text-xl font-bold text-slate-900">
              <span>🌸</span>
              Sản phẩm Hot Tết 2026
              <span>🌸</span>
            </h2>
            <p className="text-sm text-slate-600">
              Những sản phẩm được săn đón nhiều nhất trong dịp Tết Nguyên Đán
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productsMock.slice(0, 8).map((product, index) => (
              <div key={product.slug} className="relative">
                {index === 0 && (
                  <span className="absolute -top-2 left-2 z-10 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                    HOT
                  </span>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/products"
              className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Xem tất cả sản phẩm →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
