import Link from 'next/link';
import { productsMock } from '@/features/products/mock';
import { ProductCard } from '@/features/products/components/ProductCard';

export default function ProductList() {
  return (
    <section className="grid gap-4 md:grid-cols-[220px,1fr]">
      {/* Products section */}
      <div className="space-y-4">
        {/* Section Title */}
        <div className="text-center my-6">
          <h2 className="mb-2 flex items-center justify-center gap-2 text-xl font-bold text-slate-900">
            <span>🌸</span>
            <span className="text-2xl font-bold text-[rgba(212,17,17)]">Sản phẩm Hot Tết 2026</span>
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
                  {/* HOT */}
                </span>
              )}
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/products"
            className="rounded-full bg-[var(--color-red)] px-6 py-2 text-sm font-semibold 
            text-white hover:text-[var(--color-gold)]"
          >
            Xem tất cả sản phẩm →
          </Link>
        </div>
      </div>
    </section>
  );
}
