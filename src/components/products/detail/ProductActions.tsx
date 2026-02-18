"use client";

import { ShoppingBagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { useProductOptionsStore } from "@/stores/product-options-store";

export type ProductForCart = {
  productId: string;
  name: string;
  price: string;
  image?: string;
};

type ProductActionsProps = {
  product?: ProductForCart;
};

const defaultProduct: ProductForCart = {
  productId: "product-1",
  name: "Product Name",
  price: "350,000₫",
  image: "https://placehold.co/600x400?text=01",
};

export function ProductActions({ product }: ProductActionsProps) {
  const addItem = useCartStore((s) => s.addItem);
  const color = useProductOptionsStore((s) => s.color);
  const size = useProductOptionsStore((s) => s.size);
  const quantity = useProductOptionsStore((s) => s.quantity);

  const currentProduct = product ?? defaultProduct;

  const handleAddToCart = () => {
    addItem({
      productId: currentProduct.productId,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      color,
      size,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <Button
        type="button"
        className="h-12 flex-1 text-lg text-black add-to-cart-btn"
        onClick={handleAddToCart}
      >
        <ShoppingBagIcon />
        Thêm vào giỏ hàng
      </Button>
      <Button type="button" className="h-12 flex-1 text-lg text-white buy-now-btn">
        Mua ngay
      </Button>
    </div>
  );
}
