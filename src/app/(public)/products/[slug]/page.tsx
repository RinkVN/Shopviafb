import { ProductDetailHeader } from "@/components/products/detail/ProductDetailHeader";
import { ProductImageGallery } from "@/components/products/detail/ProductImageGallery";
import { ProductInfo } from "@/components/products/detail/ProductInfo";
import { ProductDescription } from "@/components/products/detail/ProductDescription";

export default function ProductDetailPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8">
      <ProductDetailHeader />

      <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
        <ProductImageGallery />
        <ProductInfo />
      </div>

      <ProductDescription />
    </div>
  );
}
