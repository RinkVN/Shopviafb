import { Separator } from "@/components/ui/separator";
import { ProductPurchaseNotice } from "./ProductPurchaseNotice";
import { ProductDescriptionContent } from "./ProductDescriptionContent";

export function ProductDescription() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Mô tả sản phẩm
        </h2>
        <Separator className="mt-2" />
      </div>

      <ProductPurchaseNotice />
      <ProductDescriptionContent />
    </section>
  );
}
