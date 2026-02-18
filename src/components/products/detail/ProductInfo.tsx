import { ProductPriceBlock } from "./ProductPriceBlock";
import { ProductOptions } from "./ProductOptions";
import { ProductActions, type ProductForCart } from "./ProductActions";

type ProductInfoProps = {
  product?: ProductForCart;
};

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="grid gap-6">
      <ProductPriceBlock />
      <ProductOptions />
      <ProductActions product={product} />
    </div>
  );
}
