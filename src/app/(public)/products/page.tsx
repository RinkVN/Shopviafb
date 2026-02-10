import Link from "next/link";
import { productsMock } from "@/features/products/mock";
import { ProductCard } from "@/features/products/components/ProductCard";

export default function ProductsListPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-base font-semibold text-slate-900">
            Tất cả sản phẩm
          </h1>
          <p className="text-[12px] text-slate-500">
            Danh sách tài khoản AI, phần mềm bản quyền, tiện ích số.
          </p>
        </div>
        <p className="text-[12px] text-slate-500">
          {productsMock.length} sản phẩm
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productsMock.map((product) => (
          <ProductCard key={product.slug} product={product} ctaLabel="Thêm vào giỏ" />
        ))}
      </div>
    </div>
  );
}

