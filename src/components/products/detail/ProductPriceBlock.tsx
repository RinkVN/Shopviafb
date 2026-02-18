type ProductPriceBlockProps = {
  price?: string;
  originalPrice?: string;
  saveAmount?: string;
  soldCount?: string;
};

export function ProductPriceBlock({
  price = "350,000₫",
  originalPrice = "527,000₫",
  saveAmount = "376,000₫",
  soldCount = "498 sản phẩm đã bán",
}: ProductPriceBlockProps) {
  return (
    <div className="grid gap-1">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-3xl font-bold text-[var(--color-red-500)]">{price}</span>
        {originalPrice && (
          <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
        )}
        {saveAmount && (
          <span className="inline-flex items-center gap-1.5 ml-2.5 py-[5px] px-3 rounded-full text-sm font-bold leading-none text-white bg-gradient-to-r from-[#ff4d4f] to-[#ff7a45] shadow-[0_3px_8px_rgba(255,77,79,0.35)]">
            <span className="ktk-icon w-2 h-2 rounded-full bg-white/80 shrink-0" aria-hidden />
            Tiết kiệm <span className="save-number">{saveAmount}</span>
          </span>
        )}
      </div>
      {soldCount && (
        <div className="text-sm text-gray-500">{soldCount}</div>
      )}
    </div>
  );
}
