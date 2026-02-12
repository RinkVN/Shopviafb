import Link from 'next/link';
import type { Product } from '@/features/products/types';

interface ProductCardProps {
  product: Product;
  ctaLabel?: string;
}

export function ProductCard({ product, ctaLabel = 'Mua ngay' }: ProductCardProps) {
  return (
    <div
      className="rounded-lg bg-card text-card-foreground group overflow-hidden border-2 
      border-[rgba(255,191,0.)] shadow-lg hover:shadow-2xl hover:border-[rgba(255,191,0.4)]
       transition-all duration-500 animate-fade-in bg-gradient-to-br from-white
       hover:-translate-y-1"
      style={{ animationDelay: '80ms' }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform 
          duration-700"
        />

        {/* Discount badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <div
            className="inline-flex items-center rounded-full transition-colors focus:outline-none 
          focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 bg-[rgba(212,17,17,0.8)] text-white 
          text-sm font-black px-3 py-1 shadow-lg border border-[rgba(255,191,0.4)]"
          >
            🧧 -10%
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3 ">
        <h3
          className="font-semibold text-foreground line-clamp-2 min-h-[44px] 
        group-hover:text-[rgba(212,17,17)] transition-colors text-sm md:text-base"
        >
          {product.name}
        </h3>

        {/* Price + saving */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-xl md:text-2xl font-black text-[rgba(212,17,17)]">
              {product.price.toLocaleString('vi-VN')} ₫
            </span>
            {product.originalPrice && (
              <span className="text-xs md:text-sm text-muted-foreground line-through">
                {product.originalPrice.toLocaleString('vi-VN')} ₫
              </span>
            )}
          </div>

          {product.originalPrice && (
            <div className="text-xs text-green-600 font-medium flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up w-3 h-3"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <span>
                Tiết kiệm {(product.originalPrice - product.price).toLocaleString('vi-VN')} ₫
              </span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star w-3 h-3 text-tet-gold fill-tet-gold"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star w-3 h-3 text-tet-gold fill-tet-gold/50"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </div>
          <span className="text-xs text-muted-foreground">4.7 (130)</span>
        </div>

        {/* Sold / progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground flex items-center gap-1">
              <span>Đã bán: {product.sold.toLocaleString('vi-VN')}</span>
            </span>
            <span className="text-muted-foreground">Sắp cháy hàng</span>
          </div>

          <div className="relative w-full bg-muted rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r 
              from-destructive to-orange-500"
              style={{ width: '60%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/products/${product.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block group/btn"
        >
          <div className="relative bg-[rgba(212,17,17)] rounded-md border border-[rgba(255,191,0.4)]">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md 
            text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
            disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
            bg-primary hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-[rgba(212,17,17,0.8)] via-red-600 
            to-[rgba(212,17,17,0.8)] hover:from-[rgba(212,17,17,0.8)] hover:via-[rgba(212,17,17,0.8)] hover:to-[rgba(212,17,17,0.8)] text-white font-bold 
            shadow-lg hover:shadow-xl hover:shadow-[rgba(212,17,17,0.3)] transition-all duration-300 hover:scale-105 
            relative overflow-hidden border-2 border-tet-gold/50 hover:animate-[firework-glow_0.5s_ease-in-out_infinite]
             w-full gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[rgba(255,191,0.4)]/0 
              via-[rgba(255,191,0.4)]/30 to-[rgba(255,191,0.4)]/0 -translate-x-full 
              group-hover/btn:translate-x-full transition-transform duration-700" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart w-4 h-4 group-hover/btn:animate-bounce 
                relative z-10"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="relative z-10">{ctaLabel}</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
