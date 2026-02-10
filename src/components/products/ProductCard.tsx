import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/features/products/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  ctaLabel?: string;
}

export function ProductCard({
  product,
  ctaLabel = "Mua ngay",
}: ProductCardProps) {
  const badgeVariant =
    product.badge?.toLowerCase().includes("hot") ||
    product.badge?.toLowerCase().includes("new")
      ? "hot"
      : "sale";

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-slate-100/80 bg-gradient-to-b from-white to-slate-50/80 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
        <div className="relative h-32 w-full overflow-hidden bg-slate-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-95"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent" />
          {product.badge && (
            <Badge
              variant={badgeVariant}
              className="absolute left-2 top-2 shadow-sm shadow-red-500/30"
            >
              {product.badge}
            </Badge>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col gap-1.5 px-3 py-2.5">
          <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-slate-900">
            {product.name}
          </p>
          <p className="text-[11px] font-semibold text-emerald-600">
            {product.price.toLocaleString("vi-VN")}đ{" "}
            {product.originalPrice && (
              <span className="ml-1 text-[10px] font-normal text-slate-400 line-through">
                {product.originalPrice.toLocaleString("vi-VN")}đ
              </span>
            )}
          </p>
          <p className="text-[10px] text-slate-400">
            Đã bán {product.sold.toLocaleString("vi-VN")}
          </p>
          <Button size="sm" className="mt-1 self-stretch rounded-full">
            {ctaLabel}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}

